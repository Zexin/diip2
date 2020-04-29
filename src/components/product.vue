<template>
  <el-container>
    <el-main class="productPage">
      <div class="bgTxt">PRODUCT</div>
      <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <div class="product_title">SOLUTIONS AND PRODUCTS</div>
      </el-col>
      <el-col
        class="product-tpo-title"
        :span="24"
        :xs="0"
        :sm="24"
        :md="24"
        :lg="24"
        :xl="24"
        style="position:absolute;left:4px;width:85%"
      >
        <el-row :gutter="32" align="middle" class="flex-middle">
          <el-col :span="12"></el-col>
          <el-col :span="10">
            <div
              style="text-align:left;color:rgba(154, 132, 78, 1);font-size:20px"
            >SOLUTIONS AND PRODUCTS</div>
          </el-col>
        </el-row>
      </el-col>
      <swiper ref="mySwiper" :options="swiperOptions" class="productPages">
        <swiper-slide class="product-holder">
          <kitchenL></kitchenL>
        </swiper-slide>
        <swiper-slide class="product-holder">
          <stepsInk></stepsInk>
        </swiper-slide>
        <swiper-slide class="product-holder">
          <linkedScreen></linkedScreen>
        </swiper-slide>
        <swiper-slide class="product-holder">
          <mirrorReality></mirrorReality>
        </swiper-slide>
        <swiper-slide class="product-holder">
          <video5></video5>
        </swiper-slide>
        <swiper-slide class="product-holder">
          <easyTag></easyTag>
        </swiper-slide>
      </swiper>
      <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <img class="btn_product_left" src="../assets/btnleft2.png" @click="topre" />
        <img class="btn_product_right" src="../assets/btnright2.png" @click="tonext" />
      </el-col>
    </el-main>
  </el-container>
</template>
<style>
@import "../common/product.css";
</style>
<script>
import kitchenL from "./product_contents/kitchenL";
import stepsInk from "./product_contents/stepsInk";
import linkedScreen from "./product_contents/linkedScreen";
import mirrorReality from "./product_contents/mirrorReality";
import video5 from "./product_contents/video5";
import easyTag from "./product_contents/easyTag";
export default {
  name: "productHolder",
  props: {},
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
        },
        loop: true,
        slidesPerView: "auto"
        // autoplay: true
        // Some Swiper option/callback...
      },
      activeIndex: 1
    };
  },
  methods: {
    topre() {
      this.swiper.slidePrev();
    },
    tonext() {
      this.swiper.slideNext();
    }
  },
  components: {
    kitchenL,
    stepsInk,
    linkedScreen,
    mirrorReality,
    video5,
    easyTag
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {}
};
</script>