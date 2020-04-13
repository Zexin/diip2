<template>
	<div class="header">
		<img src="../assets/logo.png" class="header-logo" />
		<div class="menu-btn">产品与服务</div>
		<div class="menu-btn">创新基因</div>
		<div class="menu-btn">投资者关系</div>
		<div class="menu-btn">联系我们</div>
	</div>
</template>

<script>
	export default {
		name: "vHeader",
		props: {},
		data() {
			return {};
		},
		methods: {},
		computed: {}
	};
</script>
<style scoped>
	.header {
		width: 100%;
		height: 150px;
		position: absolute;
		top: 0;
		left: 0;
		/* background: yellow; */
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.header-logo {
		width: 120px;
		position: absolute;
		left: 0;
		padding: 20px 105px;
	}
	.menu-btn {
		padding: 40px;
	}
	.menu-btn:last-of-type {
		padding-right: 105px;
	}
</style>