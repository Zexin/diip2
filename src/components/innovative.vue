<template>
  <el-container>
    <el-main style="position:relative;height:100%;padding:0">
      <el-row style="height:100%;">
        <el-col :span="10" class="innovative-holder">
          <swiper ref="mySwiper" style="height:100%; " :options="swiperOptions">
            <swiper-slide v-for="i in imgList" v-bind:key="i.name" class="innovative-holder">
              <img :src="i.img" class="in-img" />
            </swiper-slide>
          </swiper>
        </el-col>
        <el-col :span="14" class="innovative-holder">
          <div class="in-right-holder flex-middle">
            <div class="in-right-inner">
              <h2>BORN TO BE INNOVATIVE</h2>
              <div class="swiper-pagination-inno" slot="pagination"></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<style>
.in-right-holder h2 {
  font-size: 24px;
  font-weight: 400;
  color: rgba(154, 132, 78, 1);
  line-height: 33px;
  margin-bottom: 50px;
}
.in-right-holder {
  width: 115%;
  height: 700px;
  background: black;
  margin-left: -15%;
  z-index: 222;
}
.in-right-inner {
  display: flex;
  flex-direction: column;
  padding-right: 100px;
  text-align: right;
}
.innovative-holder {
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  overflow: hidden;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;

  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  /* background: #000; */
}
.in-img {
  width: 120%;
}

.swiper-pagination-inno {
  width: 100%;
}
.swiper-pagination-inno .swiper-pagination-bullet {
  width: 100%;
  height: 100px;
  outline: none;
  border-radius: 0;
  /* background: yellow; */
  font-size: 70px;
  line-height: 100px;
  color: white !important;
  background: black;
}
.swiper-pagination-inno .swiper-pagination-bullet-active {
  color: #d9ba6c !important;
  background: black;
}
@media screen and (max-width: 1366px) {
  .swiper-pagination-inno .swiper-pagination-bullet {
    font-size: 50px;
    height: 80px;
    line-height: 80px;
  }
}
@media screen and (max-width: 992px) {
  .swiper-pagination-inno .swiper-pagination-bullet {
    font-size: 40px;
    height: 60px;
    line-height: 60px;
  }
}
@media screen and (max-width: 768px) {
}
</style>
<script>
export default {
  name: "innovativeHolder",
  props: {},
  data() {
    let that = this;
    return {
      imgList: [
        { name: "商业模式创新", img: require("./../assets/inno_1.png") },
        { name: "创意与艺术", img: require("./../assets/inno_2.png") },
        { name: "技术之美", img: require("./../assets/inno_3.png") },
        { name: "生活方式供应商", img: require("./../assets/inno_4.png") }
      ],
      swiperOptions: {
        // direction: "vertical",
        pagination: {
          el: ".swiper-pagination-inno",
          clickable: true,
          renderBullet: function(index, className) {
            return (
              '<div class="' +
              className +
              '">' +
              that.imgList[index].name +
              "</div>"
            );
          }
        },
        loop: true
      },
      activeIndex: 1
    };
  },
  methods: {},
  components: {},
  computed: {},
  mounted() {}
};
</script>