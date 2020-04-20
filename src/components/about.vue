<template>
  <el-container style="background:black;color:white;height:100%;">
    <el-main style="position:relative;margin:20px; ">
      <div class="about-txt0">
        <p class="label-findus">FIND US</p>
        <h1>联系我们</h1>
      </div>
      <swiper ref="mySwiper" :options="swiperOptions" style="height:45%; ">
        <swiper-slide class="about-holder">
          <jigong></jigong>
        </swiper-slide>
        <swiper-slide class="about-holder">
          <kitchenL></kitchenL>
        </swiper-slide>
        <swiper-slide class="about-holder">
          <nayin></nayin>
        </swiper-slide>
      </swiper>
      <div class="btn-footer">
        <img src="../assets/btnleft.png" @click="topre" />
        <img class="imgR" src="../assets/btnright.png" @click="tonext" />
      </div>
    </el-main>
  </el-container>
</template>
<style>
.swiper-container {
  --swiper-theme-color: #ff6600; /* 设置Swiper风格 */
  --swiper-navigation-color: #00ff33; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px; /* 设置按钮大小 */
}
.label-findus {
  font-size: 24px;
  font-weight: 500;
  color: rgba(154, 132, 78, 1);
  line-height: 36px;
}
.about-txt0 {
  vertical-align: middle;
  text-align: center;
  width: 100%;
  z-index: 5;
  position: relative;
  top: 40px;
}
.about-txt {
  vertical-align: middle;
  text-align: center;
  width: 100%;
  z-index: 5;
  position: relative;
}
.about-txt0 h1 {
  font-size: 70px;
  margin-top: 20px;
}
.about-txt h3 {
  font-size: 30px;
}
.about-txt h4 {
  font-size: 22px;
}
.about-img {
  width: 12px;
  margin-right: 20px;
}
.about-img1 {
  width: 14px;
  margin-right: 20px;
}
.about-img2 {
  width: 13px;
  margin-right: 20px;
}
.btn-footer {
  position: absolute;
  z-index: 9999;
}
.btn-footer img {
  width: 13px !important;
  cursor: pointer;
}
.flex-middle {
  margin-left: 0 !important;
}
</style>


<script>
import jigong from "./about_contents/jigong";
import kitchenL from "./about_contents/kitchenL";
import nayin from "./about_contents/nayin";

export default {
  name: "aboutHolder",
  props: {},
  data() {
    return {
      swiperOptions: {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
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
  components: { jigong, kitchenL, nayin },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {}
};
</script>