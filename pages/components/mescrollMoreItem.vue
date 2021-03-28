<template>
	<view>
		<mescroll-uni ref="mescrollRef" @init="mescrollInit" @up="upCallback" :up="upOption" textNoMore="--我是有底线的--">
			<view class="content">
				<book-scroll-view :bookList="bookList"></book-scroll-view>
			</view>
		</mescroll-uni>
	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	import bookScrollView from "@/pages/components/bookScrollView"
	export default {
		name:"mescroll-more-item",
		mixins: [MescrollMixin],
		data() {
			return {
				bookList:[],
				upOption:{
					page:{
						size:4
					},
					noMoreSize: 4,
				},
			}
		},
		methods: {
			upCallback({num, size}) {
				console.log("needcallback")
				uni.request({
					url: this.$websiteUrl + `/api/book/getPageContent/${this.current}/${num}/${size}`,
					method: 'GET',
					success:(res)=>{
						let curPageData = res.data.pageContent
						let curPageLen  = curPageData.length
						let totalSize = res.data.totalSize;
						if(num == 1){
							this.bookList = [];
						} 
						this.bookList = this.bookList.concat(curPageData);
						console.log(this.bookList)
						this.mescroll.endBySize(curPageLen, totalSize)
					},
					fail: () => {
						this.mescroll.endErr()
					}
				})
			}
		},
		props:{
			current: String,
		},
		components:{bookScrollView,MescrollUni}
	}
</script>

<style lang="scss">
	.content{
		margin:130rpx $uni-col-margin;
	}
</style>
