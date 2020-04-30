<template>
  <el-container style="background:black;color:white;height:100%;">
    <el-main class="about_main">
      <div class="about-txt0">
        <p class="label-findus">FIND US</p>
        <h1>联系我们</h1>
      </div>
      <swiper ref="mySwiper" class="about-swiper" :options="swiperOptions">
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
        <img src="../assets/btnleft3.png" @click="topre" />
        <img class="imgR" src="../assets/btnright3.png" @click="tonext" />
      </div>
    </el-main>
  </el-container>
</template>
<style>
.about_main {
  position: relative;
  margin: 20px;
}
.swiper-container {
  --swiper-theme-color: #ff6600; /* 设置Swiper风格 */
  --swiper-navigation-color: #00ff33; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 30px; /* 设置按钮大小 */
}
.about-swiper {
  height: 45%;
  min-height: 350px;
}
.label-findus {
  font-size: 24px;
  font-weight: 500;
  color: rgba(154, 132, 78, 1);
  line-height: 36px;
  margin-top: 0;
}
.about-txt0 {
  vertical-align: middle;
  text-align: center;
  width: 100%;
  z-index: 5;
  position: relative;
  top: 1vh;
}
.about-txt {
  vertical-align: middle;
  text-align: center;
  width: 100%;
  z-index: 5;
  position: relative;
}
.about-txt0 h1 {
  font-size: 50px;
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
  position: relative;
  top: 100px;
  z-index: 9999;
}
.btn-footer img {
  width: 13px !important;
  cursor: pointer;
}
.flex-middle {
  margin-left: 0 !important;
}
@media screen and (max-width: 768px) {
  .about-txt0 {
    top: 40px;
    margin-bottom: 80px;
  }
  .label-findus {
    margin: 0;
    font-size: 16px;
    line-height: 16px;
  }
  .about-txt0 h1 {
    font-size: 20px;
    line-height: 24px;
    margin: 0;
    margin-top: 5px;
  }
  .about-swiper {
    height: auto;
    min-height: auto;
    margin-top: 15px;
  }
  .about-txt h4 {
    font-size: 15px;
    margin: 0;
  }
  .about_p1 {
    font-size: 12px;
    line-height: 18px !important;
    margin: 5px 0 10px;
  }
  .about_p2 {
    font-size: 10px;
    line-height: 16px !important;
    margin: 0 !important;
  }
  .about-img {
    width: 10px;
    margin-right: 10px;
  }
  .about-img1 {
    width: 10px;
    margin-right: 10px;
  }
  .about-img2 {
    width: 10px;
    margin-right: 10px;
  }
  .btn-footer {
    position: relative;
    top: 0px;
    z-index: 9999;
  }
  .btn-footer img {
    width: 10px !important;
  }
  .about_main {
    padding-bottom: 0 !important;
  }
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