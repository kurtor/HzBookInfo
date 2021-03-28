<template>
	<view class="book-new">
		<mescroll-uni ref="mescrollRef" @init="mescrollInit" @up="upCallback" :up="upOption" textNoMore="--我是有底线的--">
			<view class="content">
				<book-scroll-view :bookList = "bookList"></book-scroll-view>
			</view>
		</mescroll-uni>
	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	import bookScrollView from "@/pages/components/bookScrollView"
	export default {
		mixins: [MescrollMixin],
		data() {
			return {
				upOption:{
					page:{
						size:5
					},
					noMoreSize: 5,
				},
				bookList:[]
			}
		},
		onLoad(){
		},
		methods: {
			upCallback({num, size}) {
				uni.request({
					url:this.$websiteUrl+`/api/book/getPageContent/new/${num}/${size}`,
					method:'GET',
					success:(res)=>{
						let curPageData = res.data.pageContent
						let curPageLen  = curPageData.length
						let totalSize = res.data.totalSize;
						if(num == 1){
							this.bookList = [];
						} 
						this.bookList = this.bookList.concat(curPageData);
						this.mescroll.endBySize(curPageLen, totalSize)
					},
					fail: () => {
						this.mescroll.endErr()
					}
				})
			}
		},
		components:{bookScrollView,MescrollUni}
	}
</script>

<style lang="scss"> 
	.book-new{
		.content{
			margin:50rpx $uni-col-margin;
		}
	}
</style>
