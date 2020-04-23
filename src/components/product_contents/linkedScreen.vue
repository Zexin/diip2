<template>
  <el-container>
    <div>
      <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
        <el-row :gutter="32" align="middle" class="flex-middle">
          <el-col :span="12">
            <div class="product-txt">
              <!-- <img src="../../assets/product_linkedscreen.png" class="product-pic" /> -->
              <video class="product-pic"></video>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="product-txt">
              <h2>SOLUTIONS AND PRODUCTS</h2>
              <h1>Linked Screen</h1>
              <h3>
                多屏千人互动引擎
                <br />互动娱乐体验提升现场人气
              </h3>
              <h4>深度契合品牌市场营销方案的定制化的创意互动，结合社交网络传播聚拢粉丝，创造消费场景提升销售转化率。</h4>
              <img src="../../assets/logo_linkedscreen.png" class="product-logo" />
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <div class="product_title">SOLUTIONS AND PRODUCTS</div>
        <div class="product_banner_img">
          <img src="../../assets/product_linkScreen1.png" class="product-pic" />
        </div>
        <div>
          <div class="product-txt">
            <div class="product_logo_title">Linked Screen</div>
            <div class="product_title_cn">
              多屏千人互动引擎
              <br />互动娱乐体验提升现场人气
            </div>
            <div class="product_content">深度契合品牌市场营销方案的定制化的创意互动，结合社交网络传播聚拢粉丝，创造消费场景提升销售转化率。</div>
            <img src="../../assets/logo_linkedscreen.png" class="product-logo" />
          </div>
        </div>
      </el-col>
    </div>
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
@media screen and (max-width: 768px) {
  .product-logo {
    height: 20px !important;
  }
}
</style>

<script>
export default {
  name: "product_linkedscreen",
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