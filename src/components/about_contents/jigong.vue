<template>
  <el-container style="height:100%">
    <el-row :gutter="32" align="middle" style="height:100%;width:100%" class="flex-middle">
      <el-col :span="24">
        <div class="about-txt">
          <h4>上海吉功信息技术有限公司</h4>
          <p class="about_p1" style="line-height:30px">
            以人工智能和数据驱动的用户体验策略、交付与管理。
            <br />智能互动展馆、数字艺术和装置；数据中台战略与消费者关系管理；数字社交媒体获客，成交和跟踪。
          </p>
          <p class="about_p2" style="line-height:27px;margin-top:20px">
            <img class="about-img" src="../../assets/imgAdress.png" />上海市徐汇区天钥桥路567号610室
            <br />Suite 610, No. 567, Tian Yao Qiao Road, Shanghai, China, 200030
            <br />
            <img class="about-img1" src="../../assets/imgEmail.png" />info@linkedscreen.cn
          </p>
          <p>
            <img class="about-logo" src="../../assets/logo-jg.png" />
          </p>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>
<style  scoped>
.about-logo {
  height: 40px;
  padding-top: 40px;
}
@media screen and (max-width: 768px) {
  .about-logo {
    height: 30px;
    padding-top: 0px;
  }
}
</style> 

<script>
export default {
  name: "main_jigong",
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