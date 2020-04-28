<template>
  <div class="header">
    <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
      <div class="grid-content bg-purple" style="float:right">
        <img src="../assets/logo.png" class="header-logo" />
        <a class="menu-btn" @click="toPage('2')">产品与服务</a>
        <a class="menu-btn" @click="toPage('3')">创新基因</a>
        <!-- <a class="menu-btn">投资者关系</a> -->
        <a class="menu-btn" @click="toPage('4')">联系我们</a>
      </div>
    </el-col>
    <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
      <div class="grid-content bg-purple">
        <img src="../assets/logo.png" class="header-logo" />
        <div class="tipPage">
          <div v-show="!showTip">
            <img src="../assets/showTip.png" @touchend.stop="showTips" class="btn_show_tip" />
          </div>
          <div v-show="showTip" class="showTipPage">
            <img src="../assets/close.png" @touchstart.stop="showTip=false" class="closeTip" />
            <div class="tipBtnS">
              <a
                class="menu-btns"
                v-bind:class="[indexTip == '1'? 'active' : '']"
                @touchstart.stop="toPages('1')"
              >产品与服务</a>
              <a
                class="menu-btns"
                v-bind:class="[indexTip == '2'? 'active' : '']"
                @touchstart.stop="toPages('2')"
              >创新基因</a>
              <a
                class="menu-btns"
                v-bind:class="[indexTip == '3'? 'active' : '']"
                @touchstart.stop="toPages('3')"
              >联系我们</a>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
export default {
  name: "vHeader",
  props: {},
  data() {
    return {
      showTip: false,
      indexTip: "",
      tipSitch: false
    };
  },
  methods: {
    toPage(index) {
      var obj = {
        index: index,
        uuid: uuid.v4()
      };
      this.$store.commit("setIndex", obj);
    },
    toPages(index) {
      this.indexTip = index;
      var obj = {
        index: index,
        uuid: uuid.v4()
      };
      this.$store.commit("setIndexs", obj);
      this.showTip = false;
      this.tipSitch = false;
    },
    showTips() {
      this.showTip = true;
      this.tipSitch = true;
    },
    showPages() {
      if (this.tipSitch) {
        this.showTip = false;
        this.tipSitch = false;
      }
    }
  },
  watch: {
    showTipPages(val) {
      console.log(val);
      //普通的watch监听
      this.showPages();
    }
  },
  computed: {
    showTipPages: function() {
      return this.$store.state.hideTip;
    }
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 105px !important;
  position: absolute;
  top: 0;
  left: 0;
  /* background: yellow; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.header-logo {
  width: 120px;
  position: absolute;
  left: 0;
  padding: 22px 141px;
  top: 0;
  z-index: 9;
}
.menu-btn {
  margin: 40px;
  cursor: pointer;
  color: white;
  text-decoration: none;
}
.menu-btn:last-of-type {
  margin-right: 141px;
}
@media screen and (max-width: 768px) {
  .header {
    height: 60px !important;
  }
  .header-logo {
    width: 40px;
    position: absolute;
    left: calc(50% - 20px);
    padding: 0px;
    top: 20px;
  }
  .menu-btns {
    margin-top: 8.5vw;
    cursor: pointer;
    color: white;
    text-decoration: none;
    display: block;
    font-size: 16px;
  }
  .active {
    color: #d9ba6c;
  }
  .tipPage {
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0;
  }
  .btn_show_tip {
    position: absolute;
    left: 30px;
    top: 21px;
    width: 20px;
  }
  .showTipPage {
    position: absolute;
    width: calc(50% - 20px);
    height: calc(56.34vw + 60px);
    left: 0;
    top: 0;
    background-color: rgba(51, 51, 51, 0.9);
    z-index: 99999999;
  }
  .closeTip {
    position: absolute;
    width: 20px;
    left: 30px;
    top: 20px;
  }
  .tipBtnS {
    position: absolute;
    top: 60px;
    left: 30px;
    text-align: left;
  }
}
</style>