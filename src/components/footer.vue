<template>
  <div class="footer">
    <div class="f-menu">
      <a class="footer-menu" href="#product">产品与服务</a>
      <a class="footer-menu" href="#innovative">创新基因</a>
      <a class="footer-menu">投资者关系</a>
      <a class="footer-menu" href="#about">联系我们</a>
    </div>
    <div class="f-logo-holder">
      <img src="../assets/logo.png" class="header-logo" />
      <div class="f-icp-holder">
        上海吉功信息技术有限公司拥有及运营 ©
        <a
          class="footer_a"
          target="_blank"
          href="http://www.beian.miit.gov.cn/"
        >沪ICP备17041464号-5</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vFooter",
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>
<style scoped>
.f-icp-holder {
  font-size: 12px;
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
</style>