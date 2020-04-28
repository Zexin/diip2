<template>
  <el-container>
    <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="paroduct_el_col">
      <el-row :gutter="32" align="middle" class="flex-middle">
        <el-col :span="12">
          <div class="product-txt">
            <img src="../../assets/product_kitchenl.jpg" class="product-pic" />
          </div>
        </el-col>
        <el-col :span="10">
          <div class="product-txt">
            <h1>KITCHEN.L</h1>
            <h3>
              创新生活方式体验空间
              <br />美食主题潮拍和团建活动地标
            </h3>
            <h4>创新美食生活方式品牌，打造线上内容IP加线下体验空间的商业矩阵，从品牌营销战略到创新跨界品牌形象执行与社会化传播</h4>
            <img src="../../assets/logo_kitchenl.png" class="product-logo" />
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
      <div class="product_banner_img">
        <img src="../../assets/product_kitchenl.jpg" class="product-pic" />
      </div>
      <div>
        <div class="product-txt">
          <div class="product_logo_title">KITCHEN.L</div>
          <div class="product_title_cn">
            创新生活方式体验空间
            <br />美食主题潮拍和团建活动地标
          </div>
          <div class="product_content">创新美食生活方式品牌，打造线上内容IP加线下体验空间的商业矩阵，从品牌营销战略到创新跨界品牌形象执行与社会化传播</div>
          <img src="../../assets/logo_kitchenl.png" class="product-logo" />
        </div>
      </div>
    </el-col>
  </el-container>
</template>
<style  scoped>
.product-logo {
  height: 30px;
  position: absolute;
  bottom: 0px;
}
.product-pic {
  width: 80%;
  margin-left: 0px;
}


@media screen and (max-width: 768px) {
  .product-logo {
    height: 15px !important;
  }
}
</style>

<script>
export default {
  name: "product_kitchenl",
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