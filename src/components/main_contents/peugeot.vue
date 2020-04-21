<template>
  <el-container>
    <el-row>
      <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
        <el-row :gutter="32" align="middle" class="flex-middle">
          <el-col :span="9">
            <div class="main-txt">
              <div class="main_logo_title">PEUGEOT AVENUE BEIJING</div>
              <div class="main_title">Impress customers with novel digital experience</div>
              <div class="main_content">打造科技贵族品牌旗舰形象，致力展馆整体运营及数字化体验提升。</div>
            </div>
          </el-col>
          <el-col :span="15">
            <img src="../../assets/main_peogeot.png" class="main-pic" />
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <div>
          <img src="../../assets/main_peogeot.png" class="main-pic" />
        </div>
        <div>
          <div class="main-txt">
            <div class="main_logo_title">PEUGEOT AVENUE BEIJING</div>
            <div class="main_title">Impress customers with novel digital experience</div>
            <div class="main_content">打造科技贵族品牌旗舰形象，致力展馆整体运营及数字化体验提升。</div>
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
  name: "main_peugeot",
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