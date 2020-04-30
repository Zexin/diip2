<template>
  <el-container>
    <el-row>
      <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24" style="height:100%">
        <el-row :gutter="32" align="middle" class="flex-middle" style="height:100%">
          <el-col :span="9">
            <div class="main-txt">
              <div class="main_logo_title">BOSE700 SHOWREEL 2019</div>
              <div class="main_title">
                Create an immersive
                <br />SOUND flight journey
              </div>
              <div class="main_content">理性与感性结合的数字设计，一场身临其境的想象力 • 头等舱体验旅行。</div>
            </div>
          </el-col>
          <el-col :span="15">
            <img src="../../assets/main_boses.jpg" class="main-pic" />
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <div class="main_banner_img">
          <img src="../../assets/main_boses1.jpg" class="main-pic" />
        </div>
        <div style="overflow: hidden;">
          <transition name="slide-fade">
            <div class="main-txt" v-if="showBosesPage">
              <div class="main_logo_title">BOSE700 SHOWREEL 2019</div>
              <div class="main_title">
                Create an immersive
                <br />SOUND flight journey
              </div>
              <div class="main_content">理性与感性结合的数字设计，一场身临其境的想象力 • 头等舱体验旅行。</div>
            </div>
          </transition>
        </div>
      </el-col>
    </el-row>
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
  name: "main_boses",
  props: {},
  data() {
    return {
      showBosesPage: false
    };
  },
  methods: {},
  components: {},
  computed: {},
  mounted() {
    this.showBosesPage = true;
  }
};
</script>