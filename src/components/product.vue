<template>
  <el-container>
    <el-main style="position:relative;margin:20px;overflow: hidden;">
      <div class="bgTxt">PRODUCT</div>
      <swiper ref="mySwiper" :options="swiperOptions" style="height:100%; ">
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
    </el-main>
  </el-container>
</template>
<style>
.product-txt {
  text-align: left;
}
.bgTxt {
  position: absolute;
  left: 5vw;
  top: 1vw;
  font-size: 18vw;
  font-weight: 600;
  color: rgba(155, 155, 155, 0.1);
  line-height: 420px;
}

.product-holder {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 85% !important;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.product-txt {
  vertical-align: middle;
  text-align: left;
  width: 100%;
  z-index: 5;
  position: relative;
}
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
  methods: {},
  components: {
    kitchenL,
    stepsInk,
    linkedScreen,
    mirrorReality,
    video5,
    easyTag
  },
  computed: {},
  mounted() {}
};
</script>