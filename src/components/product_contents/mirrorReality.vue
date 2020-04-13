<template>
	<el-container>
		<el-row :gutter="32" align="middle" class="flex-middle">
			<el-col :span="12">
				<div class="product-txt">
					<img src="../../assets/product_mirrorreality.png" class="product-pic" />
					<!-- <video class="product-pic"></video> -->
				</div>
			</el-col>
			<el-col :span="8">
				<div class="product-txt">
					<h2>SOLUTIONS AND PRODUCTS</h2>
					<h1>Mirror Reality</h1>
					<h3>
						服饰AR强化视觉
						<br />看见, 更美好的自己
					</h3>
					<h4>AR驱动的视觉强化升级试衣感官体验，销售转化率提升，消费链路数据化，线下线上自然引流的循环驱动力。</h4>
					<img src="../../assets/logo_mirroreality.png" class="product-logo" />
				</div>
			</el-col>
		</el-row>
	</el-container>
</template>
<style  scoped>
	.product-logo {
		height: 70px;
		margin-top: 140px;
	}
	.product-pic {
		width: 40%;
		float: right;
		margin-right: 100px;
	}
</style>

<script>
	export default {
		name: "product_linkedscreen",
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