<template>
  <el-container>
    <el-col :span="24" :xs="0" :sm="24" :md="24" :lg="24" :xl="24" class="paroduct_el_col">
      <el-row :gutter="32" align="middle" class="flex-middle">
        <el-col :span="12">
          <div class="product-txt">
            <video
              v-if="showVideo"
              ref="videoPlayer"
              class="video-js"
              poster="../../assets/product_linkScreen.png"
            >
              <source src="../../assets/jth.mp4" type="video/mp4" />
            </video>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="product-txt">
            <h1>Linked Screen</h1>
            <h3>
              多屏千人互动引擎
              <br />互动娱乐体验提升现场人气
            </h3>
            <h4>深度契合品牌市场营销方案的定制化的创意互动，结合社交网络传播聚拢粉丝，创造消费场景提升销售转化率。</h4>
            <img src="../../assets/logo_linkedscreen.png" class="product-logo" />
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24" :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
      <div class="product_banner_img">
        <video
          v-if="!showVideo"
          ref="videoPlayer"
          class="video-js"
          poster="../../assets/product_linkScreen.png"
        >
          <source src="../../assets/jth.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <div class="product-txt">
          <div class="product_logo_title">Linked Screen</div>
          <div class="product_title_cn">
            多屏千人互动引擎
            <br />互动娱乐体验提升现场人气
          </div>
          <div class="product_content">深度契合品牌市场营销方案的定制化的创意互动，结合社交网络传播聚拢粉丝，创造消费场景提升销售转化率。</div>
          <img src="../../assets/logo_linkedscreen.png" class="product-logo" />
        </div>
      </div>
    </el-col>
  </el-container>
</template>
<style  scoped>
.product-logo {
  height: 50px;
  position: absolute;
  bottom: 0px;
}
@media screen and (max-width: 768px) {
  .product-logo {
    height: 20px !important;
  }
}
</style>
<style>
.video-js {
  position: absolute;
  top: 3vw;
  width: 70%;
  margin-left: 0px;
  height: calc(23.94vw - 37.2px);
  left: 0;
}
.vjs-paused .vjs-big-play-button,
.vjs-paused.vjs-has-started .vjs-big-play-button {
  display: block;
}
.video-js .vjs-big-play-button {
  font-size: 2.5em !important;
  line-height: 2.3em !important;
  height: 2.5em !important;
  width: 2.5em !important;
  -webkit-border-radius: 2.5em !important;
  -moz-border-radius: 2.5em !important;
  border-radius: 2.5em !important;
  background-color: #73859f;
  background-color: rgba(115, 133, 159, 0.5);
  border-width: 0.15em !important;
  left: calc(50% - 1.25em) !important;
  top: calc(50% - 1.25em) !important;
}
/* 中间的播放箭头 */
.vjs-big-play-button .vjs-icon-placeholder {
  font-size: 1.63em !important;
}
/* 加载圆圈 */
.vjs-loading-spinner {
  font-size: 2.5em !important;
  width: 2em !important;
  height: 2em !important;
  border-radius: 1em !important;
  margin-top: -1em !important;
  margin-left: -1.5em !important;
}

@media screen and (max-width: 768px) {
  .video-js {
    position: absolute !important;
    bottom: 0;
    width: 100%;
    margin-left: 0px;
    height: 80vw;
    left: 0;
    top: auto;
  }
}
</style>
<script>
export default {
  name: "product_linkedscreen",
  props: {},
  data() {
    return {
      player: null,
      showVideo: true
    };
  },
  methods: {},
  components: {},
  computed: {},
  created() {
    var widthL = document.body.clientWidth;
    if (widthL <= 768) {
      this.showVideo = false;
      console.log(this.showVideo);
    }
  },
  mounted() {
    let options = {
      controls: true, // 是否显示底部控制栏
      preload: "none", // 加载<video>标签后是否加载视频
      // playbackRates: [0.5, 1, 1.5, 2],// 倍速播放
      controlBar: {
        // 自定义按钮的位置
        children: [
          {
            name: "playToggle"
          }
        ]
      }
    };
    this.player = this.$video(
      this.$refs.videoPlayer,
      options,
      function onPlayerReady() {}
    );
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>