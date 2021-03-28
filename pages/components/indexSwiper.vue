<template>
	<view class="index-swiper-wrapper">
		<!-- #ifndef MP -->
		<view class="status-bar"></view>
		<!-- #endif -->
		<swiper class="index-swiper" :indicator-dots="true"
			:autoplay="true" :interval="3000" :duration="500" :circular="true">
			<swiper-item v-for="(item,index) in indexSwiperImg" :key="index">
				<navigator :url="item.url">
					<image :src="item.src"></image>
				</navigator>
			</swiper-item>
		</swiper>
	</view>
	
</template>

<script>
	export default {
		name:"index-swiper",
		data() {
			return {
				indexSwiperImg : [
					{src:"../../static/indexSwiper/indexPage1.jpg",
					url:"../artical/artical"},
					{src:"../../static/indexSwiper/indexPage2.jpg",
					url:"../artical/artical"},
					{src:"../../static/indexSwiper/indexPage3.jpg",
					url:"../artical/artical"}
				],
			}
		},
		methods: {
	
		},
		onLoad:{
			
		}
	}
</script>

<style lang="scss">
	
	.status-bar{
		height: var(--status-bar-height);
		width:100%;
	}
	
	.index-swiper{
		margin-top:128rpx;
		border-radius: 15rpx;
		overflow: hidden;
		
		image{
			height:350rpx;
			width:100%;
		}
	}
</style>
