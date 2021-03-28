<template>
	<view class="favorite-wrapper">
		<book-scroll-view :bookList = "bookList"></book-scroll-view>
	</view>
</template>

<script>
	import bookScrollView from "@/pages/components/bookScrollView"
	import { mapActions } from "vuex";

	export default {
		data() {
			return {
				bookList:[]
			}
		},
		onShow(){
			this.$store.dispatch('getFavoriteBookList').then(res=>{
				// const body = {
				// 	'favoriteIdArray': res
				// }
				// console.log(res)
				// uni.request({
				// 	url:this.websiteUrl + '/api/book/getfavorite', 
				// 	method:'POST',
				// 	header: { 'content-type': 'application/json' },
				// 	data: JSON.stringify(body),
				// 	success:(res)=>{
				// 		this.bookList = res.data;
				// 		this.haveFinished = true;
				// 	}})
				this.bookList = res;
				this.haveFinished = true;
			})
		},
		methods: {
		},
		computed:{
			...mapActions(['getFavoriteBookList'])
		},
		components:{bookScrollView}
	}
</script>

<style lang="scss">
	.favorite-wrapper{
		margin:0 50rpx;
	}
</style>
