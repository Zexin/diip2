<template>
	<div class="footer">
		<div class="f-menu">
			<div class="footer-menu">产品与服务</div>
			<div class="footer-menu">创新基因</div>
			<div class="footer-menu">投资者关系</div>
			<div class="footer-menu">联系我们</div>
		</div>
		<div class="f-logo-holder">
			<img src="../assets/logo.png" class="header-logo" />
			<div class="f-icp-holder">上海吉功信息技术有限公司拥有及运营 ©沪ICP备17041464号-5</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "vFooter",
		props: {},
		data() {
			return {};
		},
		methods: {},
		computed: {}
	};
</script>
<style scoped>
	.f-icp-holder {
		font-size: 12px;
	}
	.header-logo {
		max-height: 60px;
	}
	.footer {
		width: 100%;
		height: 325px;
		background: black;
	}
	.f-menu {
		height: 113px;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
	.f-icp-holder {
		color: white;
	}
	.f-logo-holder {
		height: 210px;
	}
	.footer-menu {
		padding: 40px;
		color: white;
	}
</style>