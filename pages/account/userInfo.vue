<template>
	<view class="user-info-wrapper">
		<view class="info-table">
			<view class="info-item">
				<view class="username">用户名</view>
				<text>{{this.$store.state.userInfo.username}}</text>
			</view>
			<view class="info-item">
				<view class="phonenumber">手机号</view>
				<text>{{this.$store.state.userInfo.phonenumber}}</text>
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
	.user-info-wrapper{
		padding:150rpx $uni-col-padding 0;
		.info-table{
			border:1rpx solid #e5e5e5;
			border-radius:20rpx;
			background-color: #ffffff;
			.info-item{
				display:flex;
				padding:20rpx 50rpx;
				border-top:1rpx solid #e5e5e5;
				.username{
					width:160rpx;
					font-size:40rpx;
				}
				.phonenumber{
					width:160rpx;
					font-size:40rpx;
				}
				text{
					flex:1;
					font-size:36rpx;
					height:60rpx;
					line-height:60rpx;
					
					border-left:1rpx solid #e5e5e5;
					padding-left:30rpx;
				}
			}
			.info-item:first-child{
				border-top:none;
			}
		}
	}
</style>
