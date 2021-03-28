<template>
	<view class="index-wrapper">
		<index-top-nav></index-top-nav>
		<index-swiper></index-swiper>
		<index-icon-table></index-icon-table>
		<view v-for="(value,key,index) in recommendObj" :key="index">
			<book-show-table :tableTitle="key" :bookList="value"></book-show-table>
		</view>
	</view>
</template>

<script>
	import indexTopNav from "@/pages/components/indexTopNav"
	import indexSwiper from "@/pages/components/indexSwiper"
	import indexIconTable from "@/pages/components/indexIconTable"
	import bookShowTable from "@/pages/components/bookShowTable"
	export default {
		data() {
			return {
				recommendObj:{},
				homeTagArray:['首页推荐','成长品读','人生百态']
			}
		},
		onLoad() {
			console.log(this.$Route)
			let params = this.homeTagArray.join('&homeTag=')
			uni.request({
				url: this.$websiteUrl+'/api/book/getRecommend?homeTag=' + params,
				method:'GET',
				success:(res)=>{
					this.recommendObj = res.data
					console.log(res.data)
				}
			})
		},
		methods: {

		},
		components:{indexTopNav,indexSwiper,indexIconTable,bookShowTable}
	}
</script>

<style lang="scss">
	.index-wrapper{
		margin:0 $uni-col-margin;
	}
	
</style>
