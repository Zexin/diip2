<template>
  <div class="footer">
    <div class="f-menu">
      <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
        <a class="footer-menu" @click="toPage('2')">产品与服务</a>
        <a class="footer-menu" @click="toPage('3')">创新基因</a>
        <a class="footer-menu" @click="toPage('4')">联系我们</a>
      </el-col>
      <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <div class="footer-menus" @click="toPages('1')">产品与服务</div>
        <div class="footer-menus" @click="toPages('2')">创新基因</div>
        <div class="footer-menus" @click="toPages('3')">联系我们</div>
      </el-col>
    </div>
    <div class="f-logo-holder">
      <img src="../assets/logo.png" class="header-logo" />
      <div class="f-icp-holder" style="display:flex">
        <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
          上海吉功信息技术有限公司拥有及运营
          <br />
          <a class="footer_a" target="_blank" href="http://www.beian.miit.gov.cn/">©沪ICP备17041464号-5</a>
        </el-col>
        <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
          上海吉功信息技术有限公司拥有及运营
          <a
            class="footer_a"
            target="_blank"
            href="http://www.beian.miit.gov.cn/"
          >©沪ICP备17041464号-5</a>
        </el-col>
      </div>
    </div>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
export default {
  name: "vFooter",
  props: {},
  data() {
    return {};
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
      var obj = {
        index: index,
        uuid: uuid.v4()
      };
      this.$store.commit("setIndexs", obj);
    }
  },
  computed: {}
};
</script>
<style scoped>
.f-icp-holder {
  font-size: 12px;
  font-weight: 300;
}
.header-logo {
  max-height: 60px;
}
.footer {
  width: 100%;
  height: 325px;
  background: black;
}
.f-menu {
  height: 113px;
  border-top: 1px solid rgba(151, 151, 151, 0.5);
  border-bottom: 1px solid rgba(151, 151, 151, 0.5);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.f-icp-holder {
  color: white;
}
.f-logo-holder {
  height: 210px;
  margin-top: 46px;
}
.footer-menu {
  margin: 40px;
  cursor: pointer;
  color: white;
  text-decoration: none;
}
.footer_a {
  text-decoration: none;
  color: white;
  font-size: 12px;
}
@media screen and (max-width: 768px) {
  .f-menu {
    height: 50px;
  }
  .footer-menus {
    cursor: pointer;
    color: white;
    text-decoration: none;
    font-size: 12px;
    margin: 20px;
    display: inline-block;
  }
  .footer {
    height: auto;
  }
  .f-logo-holder {
    height: auto;
    padding-bottom: 10px;
  }
  .f-logo-holder {
    margin-top: 15px;
  }
  .header-logo {
    height: 30px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
}
</style>