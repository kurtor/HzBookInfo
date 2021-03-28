<template>
	<view class="message-warpper">
		<view class="message-table">
			<view class="message-item">
				<view class="item-title">
					<view class="title">标题</view>
					<text>消息1</text>
				</view>
				<view class="item-content">
					<view class="content">内容</view>
					<text>内容1</text>
				</view>
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
	.message-warpper{
		padding:150rpx $uni-col-padding 0;
		.message-item{
			.item-title{
				margin-top:30rpx;
				.title{
					font-size: 36rpx;
				}
			}
			.item-content{
				margin-top:30rpx;
				.content{
					font-size: 36rpx;
				}
			}
		}
	}
</style>
