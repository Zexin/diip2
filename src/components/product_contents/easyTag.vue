<template>
  <el-container>
    <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="paroduct_el_col">
      <el-row :gutter="32" align="middle" class="flex-middle">
        <el-col :span="12">
          <div class="product-txt">
            <img src="../../assets/product_easytag.png" class="product-pic" />
          </div>
        </el-col>
        <el-col :span="10">
          <div class="product-txt">
            <h1>easyTag</h1>
            <h3>
              数据驱动的位置感知
              <br />数字展馆位置传感系统
            </h3>
            <h4>连网即用的手机定位导览服务赋能文化展馆，展品深度定制，全媒体解读，沉浸观展感官体验。</h4>
            <img src="../../assets/logo_easytag.png" class="product-logo" />
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
      <div class="product_banner_img">
        <img src="../../assets/product_easytag1.png" class="product-pic" />
      </div>
      <div>
        <div class="product-txt">
          <div class="product_logo_title">easyTag</div>
          <div class="product_title_cn">
            数据驱动的位置感知
            <br />数字展馆位置传感系统
          </div>
          <div class="product_content">连网即用的手机定位导览服务赋能文化展馆，展品深度定制，全媒体解读，沉浸观展感官体验。</div>
          <img src="../../assets/logo_easytag.png" class="product-logo" />
        </div>
      </div>
    </el-col>
  </el-container>
</template>
<style  scoped>
.product-logo {
  height: 70px;
  position: absolute;
  bottom: 0px;
}
.product-pic {
  width: 100%;
  /* margin-left: 100px; */
}

@media screen and (max-width: 992px) {
  .product-logo {
    margin-top: 60px;
  }
}

</style>

<script>
export default {
  name: "product_easytag",
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