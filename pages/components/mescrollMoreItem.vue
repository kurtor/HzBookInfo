<template>
	<view>
		<mescroll-uni ref="mescrollRef" @init="mescrollInit" @up="upCallback" :up="upOption" textNoMore="--我是有底线的--">
			<template v-if = "requestSuccess">
				<view class="content">
					<book-scroll-view :bookList="bookList"></book-scroll-view>
				</view>
			</template>
			<template v-else>
				<view class="noListItem">
						{{failHint}}
				</view>
			</template>
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
				requestSuccess: false,
				failHint:"",
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
						this.mescroll.endBySize(curPageLen, totalSize);
						console.log(this.bookList )
						this.requestSuccess = true;
					},
					fail: () => {
						this.failHint = "图书走丢了"
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
	
	.noListItem{
		font-size:40rpx;
		text-align: center;
		margin:500rpx 0;
	}
</style>
