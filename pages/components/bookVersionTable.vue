<template>
	<view class="detail-version-table">
		<view class="version-item" v-for="(item,index) in bookVersions" :key="index" v-if="item.bookInventories.length != 0">
			<view :class="[item.showImgFlag? 'item-with-img' : 'item-no-img']">
				<scroll-view scroll-x="true" style="width: 100%;">
					<view class="item-container">
						<image :src="$imgUrl + item.version_img"></image>
						<view class="item-text">
							<view class = "item-title">《{{item.real_title}}》</view>
							<view class="item-content">
								<view class = "content-author">作者：{{item.real_author}}</view>
								<view class = "content-publisher">出版：{{item.publisher}}</view>
								<view class = "content-page">页数：{{item.page_count}}</view>
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="mask"></view>
				<view class="show-img" @click = "item.showImgFlag = !item.showImgFlag" >
					&#xe600;
				</view>
			</view>
			<view class="item-inventory">
				<template v-if="!item.showInventoryFlag">
					<view class="show-btn"  @click = "item.showInventoryFlag = !item.showInventoryFlag">
						查看馆藏信息&#xe615;
					</view>
				</template>
				<template v-else>
					<view class="hide-btn" @click = "item.showInventoryFlag = !item.showInventoryFlag">
						隐藏馆藏信息&#xeb21;
					</view>
					<view class="inventory-container">
						<view class="inventory-table">
							<table border="1">
								<tr>
									<th>馆址</th>
									<th>位置</th>
									<th>状态</th>
									<th>索书号</th>
									
								</tr>
								<tr v-for="(inventoryItem,inventoryIndex) in item.bookInventories" :key="inventoryIndex">
									<td align="center" width="20%" :rowSpan="inventoryItem.lib_nameRowSpan" :style="{display: inventoryItem.lib_nameShow}">{{inventoryItem.lib_name}}</td>
									<td align="center" width="35%" :rowSpan="inventoryItem.lib_roomRowSpan" :style="{display: inventoryItem.lib_roomShow}">{{inventoryItem.lib_room}}</td>
									<td align="center" width="20%">{{inventoryItem.status}}</td>
									<td align="center" width="25%">{{inventoryItem.call_number}}</td>
								</tr>
							</table>
						</view>
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"book-version-table",
		data() {
			return {		
			}
		},
		methods: {
		},
		props:{
			bookVersions:{
				default: []
			}
		}
	}
	
</script>

<style lang="scss">
	.detail-version-table{	
		.version-item{
			margin-top: 30rpx;
			padding-bottom:30rpx;
			border:1rpx solid #e5e5e5;
			border-radius: 10rpx;
		}
		
		.item-with-img{
			display:flex;
			margin-top:40rpx;
			margin-right:20rpx;
			position: relative;

			.item-container{
				display: flex;
				
				image{
					height:190rpx;
					width:190rpx;
				}
				
				.item-text{
					width: 380rpx;
					margin:0 0 20rpx 10rpx;
					white-space: nowrap;
					
					.item-title{
						height:50rpx;
						ling-height:50rpx;
						font-size:32rpx;
						font-weight: 800;
					}
					
					.item-content{
						margin-top:5rpx;
						
						.content-author,.content-publisher,.content-page{
							height:45rpx;
							ling-height:45rpx;
							font-size:28rpx;
						}
					}
				}
			}
			
			.mask{
				position:absolute;
				top:0;
				right:0rpx;
				width:120rpx;
				height: 190rpx;
				background-image: -webkit-linear-gradient(left, hsla(0,0%,100%,0), #fff);
				background-image: -moz-linear-gradient(left, hsla(0,0%,100%,0), #fff);
				background-image: -o-linear-gradient(left, hsla(0,0%,100%,0), #fff);
				background-image: linear-gradient(left, hsla(0,0%,100%,0), #fff);
			}
			
			.show-img{
				font-size:36rpx;
				font-family: "iconfont" !important;
				font-style: normal;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				width:80rpx;
				height:190rpx;
				line-height: 180rpx;
				padding-left:15rpx;
				padding-right:10rpx;
				z-index:1;
			}
		}
		
		.item-no-img{
			display:flex;
			margin-top:40rpx;
			margin-right:20rpx;	
				
			image{
				display:none;
			}
			
			.item-container{
				display: flex;
				image{
					display:none;
				}		
				.item-text{
					width: 548rpx;
					margin:0 0 20rpx 30rpx;
					.item-title{
						ling-height:50rpx;
						font-size:32rpx;
						font-weight: 800;
					}
					.item-content{
						margin-top:20rpx;
						.content-author,.content-publisher,.content-page{
							ling-height:45rpx;
							font-size:28rpx;
						}
					}
				}
			}
			
			.show-img{
				font-size:36rpx;
				font-family: "iconfont" !important;
				font-style: normal;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				width:80rpx;
				height:190rpx;
				line-height: 180rpx;
				padding-left:15rpx;
				padding-right:10rpx;
				z-index:1;
			}
		}
		
		.item-inventory{
			margin-top:20rpx;
			
			.show-btn,.hide-btn{
				font-size:32rpx;
				font-family: "iconfont" !important;
				font-style: normal;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				text-align:center;
			}
			.inventory-container{
				.inventory-table{
					margin-top:30rpx;
					table{
						border-collapse: collapse;
					}
				}	
			}
		}
	}
	
</style>
