<template>
	<view class="book-recommend-container">
		<view class="container-title">
			{{tableTitle}}
		</view>
		<view class="container-content">
			<view class="recommend-item" v-for="(item,index) in bookList" :key="index">
				<navigator :url="'../bookDetail/bookDetail?id='+ item.id" hover-class="none"
				animation-type="zoom-out" animation-duration="300">
					<image :src="$imgUrl+item.main_img"></image>
					<view class="item-info">
						<text class = "item-title">《{{item.title}}》</text>
						<view class = "item-content">{{item.content}}</view>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"book-show-table",
		data() {
			return {
			}
		},
		props: {
			tableTitle:{
				type: String,
				default:""
			},
			bookList:{
				type: Array,
				default: []
			}
		},
		methods: {
	
		},
	}
</script>

<style lang="scss">
	.book-recommend-container{
		margin-top:70rpx;
		
		.container-title{
			color: $u-main-color;
			height:50rpx;
			line-height: 50rpx;
			font-size: 30rpx;
			padding-left:20rpx;
			border-left: 7rpx solid red;
		}
		
		.recommend-item{
			margin-top:30rpx;
			padding-bottom: 20rpx;
			border-bottom: 1rpx solid #e5e5e5;
			
			navigator{
				display:flex;
			}
			
			image{
				height:296rpx;
				width:216rpx;
				display:block;
				margin:0 auto;
			}
		}
	}
 
	.item-info{
		flex: 1;
		margin: 0 0 10rpx 30rpx;
		
		.item-title{
			font-size: 38rpx;
			font-weight: 600;
			height:70rpx;
			line-height: 70rpx;
		}
		
		.item-content{
			font-size: 26rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 4;
			-webkit-box-orient: vertical;
		}
	}
</style>
