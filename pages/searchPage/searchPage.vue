<template>
	<view class="search-page-wrapper">
		<!-- #ifndef MP -->
		<view class="status-bar"></view>
		<!-- #endif -->
		<view class="index-top-nav">
			<navigator open-type="navigateBack" hover-class="none">
				<view class="return-btn">
					<image src="../../static/pngIcon/chevron-back-outline.png"></image>
				</view>
			</navigator>
			<view class="search-box">
				<image src="../../static/pngIcon/search-outline.png" class="search-icon"></image>
				<input type="text" class="search-text" v-model="bookTitle" placeholder="请输入书名" 
					focus="true" @input="inputWord" @confirm="submit()" />
				<view class="simple-search" v-if="searchTipShow">
					<view v-for="(item,index) in titleList" :key="index" class="simple-item" @click="submit(item.title)">
						<text>{{item.title}}</text>
					</view>
				</view>
			</view>
		</view>
		<template v-if="resultShow">
			<book-scroll-view :bookList="bookList" :failHint="failHint"></book-scroll-view>
		</template>
	</view>
</template>

<script>
	import bookScrollView from "@/pages/components/bookScrollView"
	export default {
		data() {
			return {
				bookTitle:'',
				bookList:[],
				titleList:[],
				searchTipShow:false,
				resultShow: false,
				failHint:'搜索结果为空...'
			}
		},
		onLoad(option){
			
		},
		methods: {
			inputWord:((delay)=>{
				let timer;
				return function(){
					clearInterval(timer);
					timer = setTimeout(()=>{
						this.simpleSearch()
					},delay)
				}
			})(300),
			simpleSearch(){
				if(this.bookTitle){
					uni.request({
						url:this.$websiteUrl + '/api/book/simpleSearch?title=' + this.bookTitle,
						method:'GET',
						success:(res)=>{
							if(res.statusCode == 200 && res.data.length != 0){
								this.titleList = res.data;
								this.searchTipShow = true
							}
						},
					})		
				}else{
					this.searchTipShow = false
				}
			},
			submit(title){
				this.getSimpleResult = false;
				if(title){
					this.bookTitle = title
				}
				uni.request({
					url:this.$websiteUrl + '/api/book/search?title=' + this.bookTitle,
					method:'GET',
					success:(res)=>{
						this.bookList = res.data;
						this.resultShow = true;
						this.searchTipShow = false
					},
				})		
			}
		},
		components: {
			bookScrollView
		}
	}
</script>

<style lang="scss">
	.search-page-wrapper{
		margin: 0 $uni-col-margin;
		
		.status-bar{
			height: var(--status-bar-height);
			width:100%;
		}
		
		.index-top-nav {
			display: flex;
			margin: 20rpx 0;
			
			.return-btn{
				padding-right:20rpx;
				image {
					width: 80rpx;
					height: 80rpx;
				}
			} 
			
			.search-box {
				display: flex;
				flex: 1;
				position: relative;
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
					height: 80rpx;
					line-height: 80rpx;
				}
				
				.simple-search{
					position: absolute;
					width:100%;
					top:98rpx;
					border:1rpx solid #e5e5e5;
					box-shadow: 1px 1px 1px 1px #e5e5e5;
					background-color: #ffffff;
					z-index: 5;
					
					.simple-item{
						margin-left:20rpx;
						border-top: 1rpx solid #e5e5e5;
					}
					
					.simple-item:first-child{
						border-top:none;
					}
					
					text{
						font-size:36rpx;
						height:90rpx;
						line-height: 90rpx;
					}
				}
			}
		}
	}
</style>
