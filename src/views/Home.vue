<template>
  <div class="home">
    <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section page-main">
          <vMain style="height:100%"></vMain>
        </div>
        <div class="section page-product">
          <vProduct></vProduct>
        </div>
        <div class="section page-innovative">
          <vInnovative></vInnovative>
        </div>
        <div class="section page-about" id="footer-about">
          <vAbout style="height:100vh"></vAbout>
          <vFooter></vFooter>
        </div>
      </full-page>
    </el-col>
    <el-col id="test" class="home_col" :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
      <div @touchend="handleTouchStart">
        <vMain></vMain>
        <vProduct id="page1"></vProduct>
        <vInnovative id="page2"></vInnovative>
        <vAbout id="page3"></vAbout>
        <vFooter></vFooter>
      </div>
    </el-col>
  </div>
</template>
<style>
@import "../common/font/font.css";
html,
body {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
html::-webkit-scrollbar,
body::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
body {
  margin: 0;
}
.home {
  font-family: sourceHanSansCN;
}
.iScrollIndicator {
  background-color: transparent !important;
  border: 0 !important;
}

.section {
  height: 100%;
  overflow-y: hidden;
}
.section .el-container {
  height: 100%;
}
@media screen and (max-width: 768px) {
  #app {
    height: 100%;
  }
  .home {
    height: 100%;
  }
  .home_div {
    height: 100%;
  }
  .home_col {
    position: absolute;
    height: 100%;
    overflow: auto;
    z-index: 99999;
    -webkit-overflow-scrolling: touch;
  }
  #test::-webkit-scrollbar {
    display: none;
  }
  .section {
    height: auto !important;
  }
  .phonePage {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}
</style>
<script>
// @ is an alias to /src
import vMain from "../components/main.vue";
import vProduct from "../components/product.vue";
import vInnovative from "../components/innovative.vue";

import vAbout from "../components/about.vue";
import vFooter from "../components/footer.vue";
import { uuid } from "vue-uuid";

export default {
  name: "HomePage",
  components: { vMain, vProduct, vInnovative, vAbout, vFooter },
  data() {
    return {
      options: {
        scrollOverflow: true,
        licenseKey: "e2AsHyB&o4",
        menu: "#menu"
        // anchors: ["main", "product", "innovative", "about"],
        // sectionsColor: ["black", "white", "#0798ec"]
      }
    };
  },
  watch: {
    index(val) {
      //普通的watch监听
      this.toPages(val);
    },
    indexs(val) {
      //普通的watch监听
      this.toPages1(val);
    }
  },
  methods: {
    toPages: function(item) {
      this.$refs.fullpage.api.moveTo(item.index);
    },
    toPages1: function(key) {
      this.$refs.fullpage.api.destroy();
      var PageId = document.querySelector("#page" + key.index);
      document.querySelector("#test").scrollTo({
        top: PageId.offsetTop,
        behavior: "smooth"
      });
    },
    handleTouchStart: function() {
      var obj = {
        show: true,
        uuid: uuid.v4()
      };
      this.$store.commit("setShowTip", obj);
    }
  },
  computed: {
    index: function() {
      return this.$store.state.indexNum;
    },
    indexs: function() {
      return this.$store.state.indexNums;
    }
  },
  mounted() {
    var widthL = document.body.clientWidth;
    if (widthL <= 768) {
      this.$refs.fullpage.api.destroy();
    }
  }
};
</script>
