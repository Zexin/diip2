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
        <div>
          <a class="menu-btn" @click="toPage('3')">产品与服务</a>
          <a class="menu-btn">创新基因</a>
          <!-- <a class="menu-btn">投资者关系</a> -->
          <a class="menu-btn">联系我们</a>
        </div>
      </div>
    </el-col>
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
    toPage(index) {
      this.$store.commit("setIndex", index);
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
  top: 25px;
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
@media screen and (max-width: 768px) {
  .header {
    height: 70px !important;
  }
  .header-logo {
    width: 70px;
    position: absolute;
    left: 0;
    padding: 20px 0px;
  }
  .menu-btn {
    margin: 20px;
    cursor: pointer;
    color: white;
    text-decoration: none;
  }
}
</style>