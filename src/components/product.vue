<template>
  <el-container>
    <el-main style="position:relative;margin:20px;">
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
  left: 120px;
  top: 90px;
  width: 1479px;
  height: 420px;
  font-size: 300px;
  font-weight: 600;
  color: rgba(155, 155, 155, 0.1);
  line-height: 420px;
}
.product-txt h2 {
  font-size: 24px;
  font-weight: 400;
  color: rgba(154, 132, 78, 1);
  line-height: 33px;
  margin-bottom: 50px;
}

.product-txt h1 {
  font-size: 70px;
  font-weight: 500;
  color: rgba(74, 74, 74, 1);
  line-height: 98px;
  margin: 0;
}
.product-txt h3 {
  font-size: 30px;
  font-weight: 400;
  color: rgba(74, 74, 74, 1);
  line-height: 45px;
  margin: 0;
}
.product-txt h4 {
  font-size: 22px;
  width: 60%;
  font-weight: 400;
  color: rgba(155, 155, 155, 1);
  line-height: 36px;
  margin-top: 45px;
}
.product-holder {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;

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
        loop: true
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