<template>
  <el-container>
    <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
      <el-row :gutter="32" align="middle" class="flex-middle">
        <el-col :span="12">
          <div class="product-txt">
            <img src="../../assets/product_stepink.png" class="product-pic" />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="product-txt">
            <h2>SOLUTIONS AND PRODUCTS</h2>
            <h1>STEPS.INK</h1>
            <h3>
              人工智能驱动的赛事个人影集
              <br />为每个跑者提供专属参赛纪念影集
            </h3>
            <h4>覆盖马拉松赛道沿途的赛事专用智能拍摄桩，前瞻性的AI深度学习技术，将捕捉到每个参赛者的影像变为可能。</h4>
            <img src="../../assets/logo_stepink.png" class="product-logo" />
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
      <div>
        <img src="../../assets/product_stepink.png" class="product-pic" />
      </div>
      <div>
        <div class="product-txt">
          <div class="product_title">SOLUTIONS AND PRODUCTS</div>
          <div class="product_logo_title">STEPS.INK</div>
          <div class="product_title_cn">
            人工智能驱动的赛事个人影集
            <br />为每个跑者提供专属参赛纪念影集
          </div>
          <div class="product_content">覆盖马拉松赛道沿途的赛事专用智能拍摄桩，前瞻性的AI深度学习技术，将捕捉到每个参赛者的影像变为可能。</div>
          <img src="../../assets/logo_stepink.png" class="product-logo" />
        </div>
      </div>
    </el-col>
  </el-container>
</template>
<style  scoped>
.product-logo {
  height: 70px;
  margin-top: 140px;
}
.product-pic {
  width: 70%;
  margin-left: 100px;
}
</style>

<script>
export default {
  name: "product_stepink",
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