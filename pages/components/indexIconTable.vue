<template>
	<view class="index-icon-table">
		<navigator url="../bookList/bookCategory" hover-class="none">
			<view class="icon-item font1">&#xe69b;</view>
			<text class="icon-text">分类</text>
		</navigator>
		<navigator url="../bookList/bookChoice" hover-class="none">
			<view class="icon-item font2">&#xe653;</view>
			<text class="icon-text">精选</text>
		</navigator>
		<navigator url="../bookList/bookNew" hover-class="none">
			<view class="icon-item font3">&#xe70a;</view>
			<text class="icon-text">上新</text>
		</navigator>
		<navigator url="../bookList/bookReview" hover-class="none">
			<view class="icon-item font4">&#xe641;</view>
			<text class="icon-text">书评</text>
		</navigator>
	</view>
</template>

<script>
	export default{
		name:"index-icon-table",
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.index-icon-table{
		display:flex;
		justify-content: space-between;
		margin:60rpx 30rpx 0 30rpx;
		
		.icon-item{
		height: 70rpx;
		width: 70rpx;
		font-family: "iconfont" !important;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		}
		
		.font1{
			font-size:70rpx;
			margin-top:4rpx;
			margin-bottom: 8rpx;
			color: #F0A1A8;
		}
		.font2{
			font-size:65rpx;
			margin-top:2rpx;
			margin-bottom: 8rpx;
			color: #E6CEAC;
		}
		.font3{
			font-size:75rpx;
			margin-bottom: 11rpx;
			color: #8CC7B5;
		}
		.font4{
			font-size:72rpx;
			margin-top:3rpx;
			margin-bottom: 9rpx;
			color: #66A9C9;
		}
		
		.icon-text{
			font-size:26rpx;
			font-weight: 700;
			padding-left: 10rpx;
		}
	}
	
</style>
