<template>
	<el-container>
		<el-row :gutter="32" align="middle" class="flex-middle">
			<el-col :span="12">
				<div class="product-txt">
					<img src="../../assets/product_video5.png" class="product-pic" />
					<!-- <video class="product-pic"></video> -->
				</div>
			</el-col>

			<el-col :span="8">
				<div class="product-txt">
					<h2>SOLUTIONS AND PRODUCTS</h2>
					<h1>Video5. Pro</h1>
					<h3>
						会议数字化支撑包
						<br />一站式全流程数字会议服务平台
					</h3>
					<h4>全流程会务活动覆盖，数字化服务支撑包量身定制解决方案，数据驱动的决策支持和商业洞察，帮助会议管理决策和持续提升。</h4>
					<h1 class="product-logo">Video5.Pro</h1>
				</div>
			</el-col>
		</el-row>
	</el-container>
</template>
<style  scoped>
	.product-logo {
		height: 70px;
		margin-top: 140px;
		font-size: 36px;
	}
	.product-pic {
		width: 100%;
		/* margin-left: 100px; */
	}
</style>

<script>
	export default {
		name: "product_video5",
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