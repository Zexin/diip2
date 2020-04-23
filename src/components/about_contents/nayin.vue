<template>
  <el-container style="height:100%">
    <el-row :gutter="32" align="middle" style="height:100%;width:100%" class="flex-middle">
      <el-col :span="24">
        <div class="about-txt">
          <h4>上海钠盈公关有限公司</h4>
          <p class="about_p1" style="line-height:30px">
            用户触及前站，营销战略，全网执行力，路演，供应链。
            <br />市场影响战略和店面形象规划；科技路演装备，影音舞台设计；全网到达能力，物流和人员运营。
          </p>
          <p class="about_p2" style="line-height:27px;margin-top:20px">
            <img class="about-img" src="../../assets/imgAdress.png" />上海市普陀区中山北路3620弄2号楼银城大厦2106室 200062
            <br />Suite 2106, No. 2 Building, Lane 3620, North Zhongshan Road, Shanghai, China, 200062
            <br />
            <img class="about-img2" src="../../assets/icon-tel.png" />Tel：(021) 6240 1858
            <br />
            <img class="about-img1" src="../../assets/imgEmail.png" />fisher.yu@nayingpr.com.cn
          </p>
          <p>
            <img class="about-logo" src="../../assets/logo-nayin.png" />
          </p>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>
<style  scoped>
.about-logo {
  height: 48px;
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
  name: "main_nayin",
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