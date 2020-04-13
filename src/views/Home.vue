<template>
	<div class="home">
		<full-page ref="fullpage" :options="options" id="fullpage">
			<div class="section page-main">
				<vMain style="height:100%"></vMain>
			</div>

			<div class="section page-product">
				<vProduct></vProduct>
			</div>
			<div class="section page-product">
				<vInnovative></vInnovative>
			</div>

			<div class="section page-product">
				<vAbout style="height:100vh"></vAbout>
				<vFooter></vFooter>
			</div>
		</full-page>
	</div>
</template>
<style>
	.section {
		height: 100%;
	}
	.section .el-container {
		height: 100%;
	}
</style>
<script>
	// @ is an alias to /src
	import vMain from "../components/main.vue";
	import vProduct from "../components/product.vue";
	import vInnovative from "../components/innovative.vue";

	import vAbout from "../components/about.vue";
	import vFooter from "../components/footer.vue";
	export default {
		name: "HomePage",
		components: { vMain, vProduct, vInnovative, vAbout, vFooter },
		data() {
			return {
				options: {
					scrollOverflow: true,
					licenseKey: "e2AsHyB&o4",
					menu: "#menu",
					anchors: ["main", "product", "innovative", "about"]
					// sectionsColor: ["black", "white", "#0798ec"]
				}
			};
		}
	};
</script>
