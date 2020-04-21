<template>
  <div class="home">
    <div class="home_div">
      <full-page ref="fullpage" :options="options" id="fullpage">
        <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
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
        </el-col>
        <el-col class="home_col" :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          <div class="section page-innovative">
            <vMain></vMain>
            <vProduct></vProduct>
            <vInnovative></vInnovative>
            <vAbout></vAbout>
            <vFooter></vFooter>
          </div>
        </el-col>
      </full-page>
    </div>
  </div>
</template>
<style>
@import "../common/font/font.css";

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
  .section {
    height: auto !important;
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
    }
  },
  methods: {
    toPages: function(item) {
      console.log(this);
      this.$refs.fullpage.api.moveTo(item);
    }
  },
  computed: {
    index: function() {
      return this.$store.state.indexNum;
    }
  }
};
</script>
