<template>
	<view class="book-new">
		<mescroll-more-item :current="current"></mescroll-more-item>
	</view>
</template>

<script>
	import mescrollMoreItem from '../components/mescrollMoreItem.vue'
	export default {
		data() {
			return {
				bookList:[],
				current: "new",
			}
		},
		onLoad(){
		},
		methods: {
		},
		options: {
			styleIsolation: 'shared' 
		},
		components:{mescrollMoreItem}
	}
</script>

<style lang="scss"> 
	.book-new{
	}
	
	/deep/ .content{
		margin:50rpx $uni-col-margin;
	}
</style>
