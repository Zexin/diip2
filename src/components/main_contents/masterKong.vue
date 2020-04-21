<template>
  <el-container>
    <el-row>
      <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
        <el-row :gutter="32" align="middle" class="flex-middle">
          <el-col :span="9">
            <div class="main-txt">
              <div class="main_logo_title">Master Kong Experience Centre</div>
              <div class="main_title">Gamification empower customer experience</div>
              <div class="main_content">打造健康美味品牌形象，致力展馆数字化体验提升。</div>
            </div>
          </el-col>
          <el-col :span="15">
            <img src="../../assets/main_masterkong.png" class="main-pic" />
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <div>
          <img src="../../assets/main_masterkong.png" class="main-pic" />
        </div>
        <div>
          <div class="main-txt">
            <div class="main_logo_title">Master Kong Experience Centre</div>
            <div class="main_title">Gamification empower customer experience</div>
            <div class="main_content">打造健康美味品牌形象，致力展馆数字化体验提升。</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>
<style>
</style>

<script>
export default {
  name: "main_masterkong",
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