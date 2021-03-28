<template>
	<view class="author-wrapper">
		<view class="info-table">
			<view class="info-item">
				<view class="title">作者</view>
				<text>kurtor</text>
			</view>
			<view class="info-item">
				<view class="title">项目</view>
				<text>https://github.com/kurtor</text>
			</view>
			<view class="info-item">
				<view class="title">邮箱</view>
				<text>zjuygp@gmail.com</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.author-wrapper{
		padding:150rpx $uni-col-padding 0;
		.info-table{
			border:1rpx solid #e5e5e5;
			border-radius:20rpx;
			background-color: #ffffff;
			.info-item{
				display:flex;
				padding:20rpx 20rpx;
				border-top:1rpx solid #e5e5e5;
				.title{
					width:100rpx;
					font-size:40rpx;
					border-right:1rpx solid #e5e5e5;
				}
				text{
					flex:1;
					font-size:36rpx;
					height:60rpx;
					line-height:60rpx;
					padding-left:30rpx;
				}
			}
			.info-item:first-child{
				border-top:none;
			}
		}
	}
</style>
