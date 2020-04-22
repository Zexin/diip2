<template>
  <el-container>
    <div>
      <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
        <el-row :gutter="32" align="middle" class="flex-middle">
          <el-col :span="12">
            <div class="product-txt">
              <img src="../../assets/product_kitchenl.png" class="product-pic" />
            </div>
          </el-col>
          <el-col :span="8">
            <div class="product-txt">
              <h2>SOLUTIONS AND PRODUCTS</h2>
              <h1>KITCHEN.L</h1>
              <h3>
                创新生活方式体验空间
                <br />美食主题潮拍和团建活动地标
              </h3>
              <h4>创新美食生活方式品牌,打造线上内容IP加线下体验空间的商业矩阵,从品牌营销战略到创新跨界品牌形象执行与社会化传播</h4>
              <img src="../../assets/logo_kitchenl.png" class="product-logo" />
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <div class="product_title">SOLUTIONS AND PRODUCTS</div>
        <div>
          <img src="../../assets/product_kitchenl.png" class="product-pic" />
        </div>
        <div>
          <div class="product-txt">
            <div class="product_logo_title">KITCHEN.L</div>
            <div class="product_title_cn">
              创新生活方式体验空间
              <br />美食主题潮拍和团建活动地标
            </div>
            <div class="product_content">创新美食生活方式品牌,打造线上内容IP加线下体验空间的商业矩阵,从品牌营销战略到创新跨界品牌形象执行与社会化传播</div>
            <img src="../../assets/logo_kitchenl.png" class="product-logo" />
          </div>
        </div>
      </el-col>
    </div>
  </el-container>
</template>
<style  scoped>
.product-logo {
  height: 30px;
  margin-top: 120px;
}
.product-pic {
  width: 80%;
  margin-left: 20px;
}
@media screen and (max-width: 1366px) {
  .product-logo {
    margin-top: 80px;
  }
}
@media screen and (max-width: 992px) {
  .product-logo {
    margin-top: 60px;
  }
}

@media screen and (max-width: 768px) {
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