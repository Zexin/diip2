<template>
  <el-container style="height:100%">
    <el-row :gutter="32" align="middle" style="height:100%;width:100%" class="flex-middle">
      <el-col :span="24">
        <div class="about-txt">
          <h4>上海厨蜜餐饮管理有限公司</h4>
          <p class="about_p1" style="line-height:30px">
            新消费模式、跨界业务融合与创新业态开拓与商业运营。
            <br />网红跨界店运营设计，盈利验证；媒体化自传播与新餐饮业务实践；餐饮产品研发，营运和人员外包。
          </p>
          <p class="about_p2" style="line-height:27px;margin-top:20px">
            <img class="about-img" src="../../assets/imgAdress.png" />上海市徐汇区凯旋路2086号107室
            <br />Suite 107, No. 2086, Kai Xuan Road, Shanghai, China, 200030
            <br />
            <img class="about-img1" src="../../assets/imgEmail.png" />info@kitchen.com
          </p>
          <p>
            <img class="about-logo" src="../../assets/logo_kitchenl.png" />
          </p>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>
<style  scoped>
.about-logo {
  height: 30px;
  padding-top: 40px;
}
@media screen and (max-width: 768px) {
  .about-logo {
    height: 20px;
    padding-top: 0px;
  }
}
</style> 

<script>
export default {
  name: "main_kitchenLS",
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