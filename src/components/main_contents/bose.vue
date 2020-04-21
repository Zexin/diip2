<template>
  <el-container>
    <el-row>
      <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
        <el-row :gutter="32" align="middle" class="flex-middle">
          <el-col :span="9">
            <div class="main-txt">
              <div class="main_logo_title">BOSE ROADSHOW 2019</div>
              <div class="main_title">Empower brand with intelligence and innovation</div>
              <div class="main_content">快闪中国十五城，科技路演装备与影音舞台，有效带动门店销售提升。</div>
            </div>
          </el-col>
          <el-col :span="15">
            <img src="../../assets/main_bose.png" class="main-pic" />
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <div>
          <img src="../../assets/main_bose.png" class="main-pic" />
        </div>
        <div>
          <div class="main-txt">
            <div class="main_logo_title">BOSE ROADSHOW 2019</div>
            <div class="main_title">Empower brand with intelligence and innovation</div>
            <div class="main_content">快闪中国十五城，科技路演装备与影音舞台，有效带动门店销售提升。</div>
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
  name: "main_bose",
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