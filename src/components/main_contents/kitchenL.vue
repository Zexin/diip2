<template>
  <el-container style="height:100%">
    <el-row style="width:100%">
      <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24" style="height:100%">
        <el-row :gutter="32" align="middle" class="flex-middle" style="height:100%">
          <el-col :span="9">
            <div class="main-txt">
              <div class="main_logo_title">KITCHEN.L</div>
              <div class="main_title">
                Cook together
                <br />for your loved ones
              </div>
              <div class="main_content">创造美食、社交、商务、活动一体的多元融合空间，对全新消费场景和体验式商业模式的创新实践。</div>
            </div>
          </el-col>
          <el-col :span="15">
            <img src="../../assets/main_kitchenl.png" class="main-pic" />
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <div class="main_banner_img">
          <img src="../../assets/main_kitchenl1.jpg" class="main-pic" />
        </div>
        <div>
          <div class="main-txt">
              <div class="main_logo_title">KITCHEN.L</div>
              <div class="main_title">
                Cook together
                <br />for your loved ones
              </div>
              <div class="main_content">创造美食、社交、商务、活动一体的多元融合空间，对全新消费场景和体验式商业模式的创新实践。</div>
            </div>
        </div>
      </el-col>
    </el-row>

    <!-- <el-row>
      <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24"></el-col>
      <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0"></el-col>
    </el-row>-->
  </el-container>
</template>
<style>
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100vw);
  opacity: 0;
}
</style>

<script>
export default {
  name: "main_kitchenL",
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {},
  computed: {},
  mounted() {}
};
</script>