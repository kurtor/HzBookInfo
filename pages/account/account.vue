<template>
	<view class="account-wrapper">
		<view class="status_bar"></view>
		<view class="account-content">
			<view class="personal-info">
				<template v-if="this.$store.state.isLogin">
					<navigator url="../account/userInfo" hover-class="none">
						<image src="../../static/tabIcon/personal.jpg"></image>
					</navigator>
					<navigator url="../account/userInfo" hover-class="none">
						<view class="username">
							{{this.$store.state.userInfo.username}}
						</view>
					</navigator>
						<text @click="logout">退出</text>
				</template>
				<template v-else>
					<navigator url="../account/userInfo" hover-class="none">
						<image src="../../static/tabIcon/personal.jpg"></image>
					</navigator>
					<navigator url="../login/login" hover-class="none">
						<text>登录/注册</text>
					</navigator>
				</template>
			</view>
			<view class="menu-list">
				<navigator class="list-item" url="./favorite" hover-class="none">
					<view class="iconfont">&#xe613;</view>
					<text>我的书架</text>
				</navigator>
				<navigator class="list-item"  url="./message" hover-class="none">
					<view class="iconfont">&#xe619;</view>
					<text>我的消息</text>
				</navigator>
				<navigator class="list-item"  url="./advice" hover-class="none">
					<view class="iconfont">&#xe638;</view>
					<text>投诉建议</text>
				</navigator>
				<navigator class="list-item"  url="./author" hover-class="none">
					<view class="iconfont">&#xe604;</view>
					<text>关于作者</text>
				</navigator>
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
			logout(){
				uni.showModal({
					content:"是否退出？",
					success:(res)=>{
						if(res.confirm){
							this.$store.dispatch('logoutSuccess').then(()=>{	
							})
						}
					}
				})	
			}
		}
	}
</script>

<style lang="scss">
	.account-wrapper{	
		.status_bar{
			height: var(--status-bar-height);
			width:100%;
		}
		.account-content{
			padding:100rpx $uni-col-padding;
			
			.personal-info{
				margin-left: 50rpx;
				display: flex;
				align-items: center;
				
				.username{
					font-size:30rpx;
					margin-left:60rpx;
				}
				
				image{
					height:150rpx;
					width:150rpx;
				}
				text{
					font-size:30rpx;
					margin-left:60rpx;
					padding:5rpx 30rpx;
					border:4rpx solid #007AFF;
					border-radius: 40rpx;
					vertical-align:middle;
					color:#FFFFFF;
					background-color: #007AFF;
				}
			}
		}	
	}
	
	.menu-list{
		margin-top:140rpx;
		.list-item{
			padding:20rpx 30rpx;
			border-bottom:1rpx solid #e5e5e5;
			display: flex;
			align-items: center;
			
			.iconfont{
				height: 45rpx;
				width: 45rpx;
				font-family: "iconfont" !important;
				font-size:45rpx;
				font-style: normal;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}
			 text{
				height:70rpx;
				line-height: 70rpx;
				font-size: 30rpx;
				padding-left: 20rpx;
			}
		}
	}
	
</style>
