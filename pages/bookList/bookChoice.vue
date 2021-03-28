<template>
	<view class="book-choice">
		<template v-if="requestStatus == 'complete'">
			<view class="choicePagination" v-if="bookList.length > 0">
				<uni-pagination :current="currentPage" :pageSize="pageSize" 
					:total="totalSize" @change="paginationChange"></uni-pagination>
			</view>
			<book-scroll-view :bookList = "bookList"></book-scroll-view>
			<view class="choicePagination" v-if="bookList.length > 0">
				<uni-pagination :current="currentPage" :pageSize="pageSize" 
					:total="totalSize" @change="paginationChange"></uni-pagination>
			</view>
			<view class="bottomBlock">
			</view>
		</template>
	</view>
</template>

<script>
	import bookScrollView from "@/pages/components/bookScrollView"
	export default {
		data() {
			return {
				currentPage:1,
				pageSize: 5,
				totalSize:0,
				bookList:[],
				requestStatus:'complete',
			}
		},
		onLoad(){
			this.refreshPage()
		},
		methods: {
			paginationChange(e){
				this.currentPage = e.current
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
				this.refreshPage()
			},
			refreshPage(){
				if(this.requestStatus == 'pending'){
					return
				}
				this.requestStatus = 'pending'
				uni.showLoading({title:"加载中...",mask:true})
				uni.request({
					url:this.$websiteUrl+`/api/book/getPageContent/choice/${this.currentPage}/${this.pageSize}`,
					method:'GET',
					success:(res)=>{
						this.totalSize = res.data.totalSize;
						this.bookList = res.data.pageContent;
					},
					complete:()=>{
						setTimeout(()=>{
							uni.hideLoading()
							this.requestStatus='complete'
						},300)
					}
				})
			}
		},
		components:{bookScrollView}
	}
</script>

<style lang="scss">
	.book-choice{
		margin:0rpx $uni-col-margin;
		overflow: hidden;
		
		.choicePagination{
			margin:60rpx 100rpx 30rpx 100rpx;
		}
		
		.bottomBlock{
			height:100rpx;
		}
		
	}
</style>
