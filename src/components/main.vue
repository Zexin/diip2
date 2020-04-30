<template>
  <el-container style="background:black;color:white;">
    <el-header class="el-header-top">
      <vHeader></vHeader>
    </el-header>
    <el-main class="mainPage">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        @slideChangeTransitionEnd="changeSwiperIndex"
        style="height:100%;"
      >
        <swiper-slide class="main-holder">
          <boses></boses>
        </swiper-slide>
        <swiper-slide class="main-holder">
          <masterKong></masterKong>
        </swiper-slide>
        <swiper-slide class="main-holder">
          <peogeot></peogeot>
        </swiper-slide>
        <swiper-slide class="main-holder">
          <bose></bose>
        </swiper-slide>
        <swiper-slide class="main-holder">
          <kitchenL></kitchenL>
        </swiper-slide>
        <swiper-slide class="main-holder">
          <mgCarfee></mgCarfee>
        </swiper-slide>
        <el-col
          class="swiper-pagination"
          slot="pagination"
          :span="24"
          :xs="0"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
        ></el-col>
      </swiper>
      <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <img class="btn_main_left" src="../assets/btnleft2.png" @click="topre" />
        <img class="btn_main_right" src="../assets/btnright2.png" @click="tonext" />
      </el-col>
      <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="active-index">0{{activeIndex}}</div>
        <div class="total-index">06</div>
        <div class="btn-footers">
          <img src="../assets/btnleft3.png" @click="topre" />
          <img class="imgR" src="../assets/btnright3.png" @click="tonext" />
        </div>
      </el-col>
    </el-main>
  </el-container>
</template>
<style>
.swiper-pagination-progressbar-fill {
  background: #d9ba6c !important;
}
.el-header {
  height: 105px;
}
.main-pic {
  width: 99%;
  vertical-align: middle;
}
.main-txt {
  vertical-align: middle;
  text-align: left;
  width: 100%;
  z-index: 5;
  position: relative;
}
.main-txt h1 {
  font-size: 70px;
  width: 135%;
}
.main-txt h3 {
  font-size: 30px;
}
.main-txt h4 {
  padding-top: 48px;
  font-size: 24px;
  width: 90%;
}
.main-holder {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  background: #000;
}
.flex-middle {
  display: flex;
  justify-content: center; /*x轴对齐方式*/
  align-items: center; /*y轴对滴方式*/
}
@import "../common/main.css";
</style>
<script>
import vHeader from "../components/header";
import kitchenL from "./main_contents/kitchenL";
import peogeot from "./main_contents/peugeot";
import bose from "./main_contents/bose";
import boses from "./main_contents/boses";
import mgCarfee from "./main_contents/mgCarfee";
import masterKong from "./main_contents/masterKong";
export default {
  name: "mainHolder",
  props: {},
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
        },
        loop: true,
        autoplay: true

        // Some Swiper option/callback...
      },
      activeIndex: 1
    };
  },
  methods: {
    changeSwiperIndex() {
      if (this.swiper.activeIndex == 0) {
        this.activeIndex = 6;
      } else if (this.swiper.activeIndex == 7) {
        this.activeIndex = 1;
      } else {
        this.activeIndex = this.swiper.activeIndex;
      }
      return (document.getElementsByClassName(
        "swiper-pagination-progressbar-fill"
      )[0].style.transform =
        "translate3d(0px, 0px, 0px) scaleX(0.2) scaleY(1) !important");
    },
    topre() {
      this.swiper.slidePrev();
    },
    tonext() {
      this.swiper.slideNext();
    }
  },
  components: {
    vHeader,
    kitchenL,
    peogeot,
    bose,
    boses,
    mgCarfee,
    masterKong
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    setTimeout(function() {
      document.getElementsByClassName(
        "swiper-pagination-progressbar-fill"
      )[0].style.transform = "translate3d(0px, 0px, 0px) scaleX(0.2) scaleY(1)";
    }, 500);
  }
};
</script>