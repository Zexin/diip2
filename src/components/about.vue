<template>
	<el-container style="background:black;color:white;height:100%;">
		<el-main style="position:relative;margin:20px; ">
			<swiper ref="mySwiper" :options="swiperOptions" style="height:100%; ">
				<swiper-slide class="about-holder">
					<kitchenL></kitchenL>
				</swiper-slide>
			</swiper>

			<div class="swiper-btn-holder">
				<div class="swiper-button-prev"></div>
				<!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
				<div class="swiper-button-next"></div>
				<!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
			</div>
		</el-main>
	</el-container>
</template>
<style>
	.swiper-container {
		--swiper-theme-color: #ff6600; /* 设置Swiper风格 */
		--swiper-navigation-color: #00ff33; /* 单独设置按钮颜色 */
		--swiper-navigation-size: 30px; /* 设置按钮大小 */
	}
	.label-findus {
		font-size: 24px;
		font-weight: 500;
		color: rgba(154, 132, 78, 1);
		line-height: 36px;
	}
	.about-txt {
		vertical-align: middle;
		text-align: center;
		width: 100%;
		z-index: 5;
		position: relative;
	}
	.about-txt h1 {
		font-size: 70px;
		margin-top: 20px;
	}
	.about-txt h3 {
		font-size: 30px;
	}
	.about-txt h4 {
		font-size: 22px;
	}
</style>


<script>
	import kitchenL from "./about_contents/kitchenL";

	export default {
		name: "aboutHolder",
		props: {},
		data() {
			return {
				swiperOptions: {
					loop: true,
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					}
					// autoplay: true

					// Some Swiper option/callback...
				},
				activeIndex: 1
			};
		},
		methods: {},
		components: { kitchenL },
		computed: {},
		mounted() {}
	};
</script>