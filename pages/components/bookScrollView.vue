<template>
	<view class="book-scroll-view" v-if="bookList.length > 0">
		<scroll-view scroll-y="true">
			<view class="book-item" v-for="(item,index) in bookList" :key="index">
				<navigator :url="'../bookDetail/bookDetail?id='+ item.id" hover-class="none" 
				animation-type="zoom-out" animation-duration="300">
					<image :src="$imgUrl + item.main_img"></image>
					<view class="book-info">
						<text class = "book-title">《{{item.title}}》</text>
						<view class = "book-content">{{item.content}}</view>
					</view>
				</navigator>	
			</view>	
		</scroll-view>
	</view>
	<view class="noListItem" v-else>
			{{failHint}}
	</view>
</template>

<script>
	export default{
		name:"book-scroll-view",
		data(){
			return{
			}
		},
		props:{
			bookList:Array,
			failHint:{
				type:String,
				default:"图书走丢了..."
			}
		}
	}
</script>

<style lang="scss">
	.book-item{
		margin-top:30rpx;
		padding-bottom: 25rpx;
		border-bottom: 1rpx solid #e5e5e5;
		
		navigator{
			display:flex;
			
			image{
				height:296rpx;
				width:216rpx;
			}	
		}
			
		.book-info{
			flex: 1;
			margin: 0 0 10rpx 30rpx;
			
			.book-title{
				font-size: 38rpx;
				font-weight: 600;
				height:70rpx;
				line-height: 70rpx;
			}
			.book-content{
				font-size: 26rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 4;
				-webkit-box-orient: vertical;
			}
		}
	}
	
	
	
	.noListItem{
		font-size:40rpx;
		text-align: center;
		margin:500rpx 0;
	}
</style>
