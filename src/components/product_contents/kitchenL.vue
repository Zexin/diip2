<template>
  <el-container>
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