<template>
	<view class="index-top-nav-wrapper">
		<!-- #ifndef MP -->
		<view class="status-bar"></view>
		<!-- #endif -->
		<view class="index-top-nav">
			<view class="nav-sidebar-btn" @click="sidebarShow = true">
				<image src="../../static/pngIcon/menu-outline.png"></image>
			</view>
			<navigator url="../searchPage/searchPage" hover-class="none">
				<view class="nav-search-box">
					<image src="../../static/pngIcon/search-outline.png"></image>
					<input type="text" placeholder="请输入书名" disabled="true"/>
				</view>
			</navigator>
			<u-popup v-model="sidebarShow" mode="left" border-radius="4" width="400">
				<!-- #ifdef APP-PLUS -->
				<view class="top-block"></view>
				<!-- #endif -->
				<view class="popup-wrapper">
					<view class="popup-table">
						<navigator url="../account/userInfo" hover-class="none">
							<view class="popup-item">
								<view class="item-left">
									<view class="logo personal">&#xe648;</view>
									<text>个人中心</text>
								</view>
								<view class="item-right">
									<view class="arrow">&#xeb1b;</view>
								</view>
							</view>
						</navigator>
						<navigator url="../account/userInfo" hover-class="none">
							<view class="popup-item">
								<view class="item-left">
									<view class="logo message">&#xe619;</view>
									<text>我的消息</text>
								</view>
								<view class="item-right">
									<view class="arrow">&#xeb1b;</view>
								</view>
							</view>
						</navigator>
						<navigator url="../account/favorite" hover-class="none">
							<view class="popup-item">
								<view class="item-left">
									<view class="logo bookshelf">&#xe608;</view>
									<text>我的书架</text>
								</view>
								<view class="item-right">
									<view class="arrow">&#xeb1b;</view>
								</view>
							</view>
						</navigator>
					</view>
					<view class="popup-table">
						<navigator url="../bookList/bookCategory" hover-class="none">
							<view class="popup-item">
								<view class="item-left">
									<view class="logo classification">&#xe69b;</view>
									<text>分类</text>
								</view>
								<view class="item-right">
									<view class="arrow">&#xeb1b;</view>
								</view>
							</view>
						</navigator>
						<navigator url="../bookList/bookChoice" hover-class="none">
							<view class="popup-item">
								<view class="item-left">
									<view class="logo choice">&#xe653;</view>
									<text>推荐</text>
								</view>
								<view class="item-right">
									<view class="arrow">&#xeb1b;</view>
								</view>
							</view>
						</navigator>
						<navigator url="../bookList/bookNew" hover-class="none">
							<view class="popup-item">
								<view class="item-left">
									<view class="logo new">&#xe70a;</view>
									<text>上新</text>
								</view>
								<view class="item-right">
									<view class="arrow">&#xeb1b;</view>
								</view>
							</view>
						</navigator>
					</view>
				</view>
				
			</u-popup>
		</view>
	</view>
</template>

<script>
	export default {
		name:"index-top-nav",
		data() {
			return {
				sidebarShow:false,
			}
		},
		onLoad() {
	
		},
		methods: {
		},
		options: {
			styleIsolation: 'shared' 
		} 
	}
</script>

<style lang="scss">
	/deep/ .u-drawer-left{
		background-color: rgba(245,245,245,256) !important;
	}
	
	.index-top-nav-wrapper{
		position: fixed;
		top: 0;
		left: 0;
		width:750rpx;
		padding: 0 $uni-col-padding;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		z-index:999;
		background-color: #ffffff;
		
		.status-bar{
			height: var(--status-bar-height);
			width:100%;
		}
		.index-top-nav {
			display: flex;
	
			.nav-sidebar-btn {
				padding-right:20rpx;
				image {
					width: 80rpx;
					height: 80rpx;
				}
			}
			
			navigator{
				flex: 1;
			}
			
			.nav-search-box {
				display: flex;
				height: 78rpx;
				border: 1px solid #000000;
				border-radius: 30rpx;
				margin: 0 5rpx 0 5rpx;
				align-items: center;
				
				image{
					width: 50rpx;
					height: 50rpx;
					margin: 10rpx 20rpx;
				}
				
				input{
					flex: 1;
					height: 80rpx;
					line-height: 80rpx;
				}
			}
			
			.top-block{
				height:80rpx;
			}
			
			.popup-wrapper{
				padding:90rpx 30rpx 0 30rpx;
				.popup-table{
					border-radius:20rpx;
					background-color: #ffffff;
					margin-bottom:40rpx;
					.popup-item{
						display:flex;
						justify-content: space-between;
						margin:0 30rpx;
						border-top:3rpx solid #F5F5F5;
						.item-left{
							flex:1;
							display:flex;
							height:80rpx;
							.logo{
								font-family: "iconfont" !important;
								font-style: normal;
								-webkit-font-smoothing: antialiased;
								-moz-osx-font-smoothing: grayscale;
								height:80rpx;
								line-height:80rpx;
								width:50rpx;
							}
							text{
								margin-left:15rpx;
								font-size:32rpx;
								height:80rpx;
								line-height:80rpx;
							}
							.personal{
								font-size:36rpx;
								margin-left:7rpx;
								margin-right:-7rpx;
							}
							.message{
								font-size:46rpx;
								margin:4rpx 0 -4rpx 0;
							}
							.bookshelf{
								font-size:44rpx;
								margin:2rpx 0 -2rpx 0;
							}
							.classification{
								font-size:42rpx;
							}
							.choice{
								font-size:36rpx;
							}
							.new{
								font-size:46rpx;
								margin:0 2rpx 0 -2rpx;
							}
						}
						.item-right{
							.arrow{
								font-family: "iconfont" !important;
								font-style: normal;
								-webkit-font-smoothing: antialiased;
								-moz-osx-font-smoothing: grayscale;
								height:80rpx;
								line-height:80rpx;
							}
						}
					}
					.popup-item:first-child{
						border-top: none; 
					}
				}
			}
		}
	}
	</style>
