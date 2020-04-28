<template>
  <el-container>
    <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="paroduct_el_col">
      <el-row :gutter="32" align="middle" class="flex-middle">
        <el-col :span="12">
          <div class="product-txt">
            <img src="../../assets/product_mirrorreality.png" class="product-pic" />
            <!-- <video class="product-pic"></video> -->
          </div>
        </el-col>
        <el-col :span="10">
          <div class="product-txt">
            <h1>Mirror Reality</h1>
            <h3>
              服饰AR强化视觉
              <br />看见, 更美好的自己
            </h3>
            <h4>AR驱动的视觉强化升级试衣感官体验，销售转化率提升，消费链路数据化，线下线上自然引流的循环驱动力。</h4>
            <img src="../../assets/logo_mirroreality.png" class="product-logo" />
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
      <div class="product_banner_img">
        <img src="../../assets/product_mirrorreality.png" class="product-pic" />
      </div>
      <div>
        <div class="product-txt">
          <div class="product_logo_title">Mirror Reality</div>
          <div class="product_title_cn">
            服饰AR强化视觉
            <br />看见, 更美好的自己
          </div>
          <div class="product_content">AR驱动的视觉强化升级试衣感官体验，销售转化率提升，消费链路数据化，线下线上自然引流的循环驱动力。</div>
          <img src="../../assets/logo_mirroreality.png" class="product-logo" />
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
  width: 50%;
  margin-left: 0px;
}
@media screen and (max-width: 768px) {
  .product-pic {
    width: 100%;
    float: right;
    margin-right: 0px;
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