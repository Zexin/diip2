<template>
  <el-container style="background:black;color:white;">
    <el-header style="height:150px;">
      <vHeader></vHeader>
    </el-header>
    <el-main style="position:relative;margin: 0 105px 105px 105px;padding:0;overflow:hidden">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        @slideChangeTransitionEnd="changeSwiperIndex"
        style="height:100%; "
      >
        <swiper-slide class="main-holder">
          <kitchenL></kitchenL>
        </swiper-slide>
        <swiper-slide class="main-holder">
          <peogeot></peogeot>
        </swiper-slide>
        <swiper-slide class="main-holder">
          <bose></bose>
        </swiper-slide>
        <swiper-slide class="main-holder">
          <mgCarfee></mgCarfee>
        </swiper-slide>
        <swiper-slide class="main-holder">
          <masterKong></masterKong>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="active-index">0{{activeIndex}}</div>
      <div class="total-index">05</div>
      <div class="btn-footer">
        <img src="../assets/btnleft.png" @click="topre" />
        <img class="imgR" src="../assets/btnright.png" @click="tonext" />
      </div>
    </el-main>
  </el-container>
</template>
<style>
.swiper-pagination {
  position: absolute;
  width: 140px !important;
  bottom: 7px !important;
  top: auto !important;
  background: #424242 !important;
  height: 4px !important;
  left: 50px !important;
}

.swiper-pagination-progressbar-fill {
  background: #d9ba6c !important;
}
.active-index {
  position: absolute;
  bottom: 0px !important;
  left: 0px !important;
  line-height: 14px;
  z-index: 999;
  color: rgba(217, 186, 108, 1);
}
.total-index {
  position: absolute;
  bottom: 0px !important;
  left: 222px !important;
  line-height: 14px;
  z-index: 999;
  color: rgba(217, 186, 108, 1);
}
.btn-footer {
  position: absolute;
  right: 0px !important;
  bottom: 0px !important;
  z-index: 9999;
}
.btn-footer img {
  width: 14px !important;
  cursor: pointer;
}
.imgR {
  margin-left: 90px;
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
</style>


<script>
import vHeader from "../components/header";

import kitchenL from "./main_contents/kitchenL";
import peogeot from "./main_contents/peugeot";
import bose from "./main_contents/bose";
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
        loop: true
        // autoplay: true

        // Some Swiper option/callback...
      },
      activeIndex: 1
    };
  },
  methods: {
    changeSwiperIndex() {
      if (this.swiper.activeIndex == 6) {
        this.activeIndex = 1;
      } else {
        this.activeIndex = this.swiper.activeIndex;
      }
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
    mgCarfee,
    masterKong
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {}
};
</script>