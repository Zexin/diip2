<template>
  <div class="header">
    <img src="../assets/logo.png" class="header-logo" />
    <a class="menu-btn" href="#product">产品与服务</a>
    <a class="menu-btn" href="#innovative">创新基因</a>
    <a class="menu-btn">投资者关系</a>
    <a class="menu-btn" href="#about">联系我们</a>
  </div>
</template>

<script>
export default {
  name: "vHeader",
  props: {},
  data() {
    return {};
  },
  methods: {
    toTip(item) {
      console.log(item);
      console.log(document.querySelector(".page-" + item).offsetTop);
    }
  },
  computed: {}
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 150px;
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
  padding: 20px 105px;
}
.menu-btn {
  margin: 40px;
  cursor: pointer;
  color: white;
  text-decoration: none;
}
.menu-btn:last-of-type {
  margin-right: 105px;
}
</style>