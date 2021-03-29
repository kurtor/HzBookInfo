<template>
	<view class="book-classification-page">
		<scroll-view scroll-x="true" height="200" class="classification-scroll-view">
			<view :class="[ current== value ? 'active btn' : 'btn']" v-for="(value, index) in classificationArray" :key="index"
				@click="current = value">
				<text>{{value}}</text>
			</view>
		</scroll-view>
		<!-- #ifdef H5 -->
		<keep-alive>
		<!-- #endif -->
			<view class="booklist-wrapper">
				<view v-for="(value, index) in classificationArray" :key="index">
					<template v-if="current == value">
						<mescroll-more-item :current="value"></mescroll-more-item>
					</template>
				</view>
			</view>
		<!-- #ifdef H5 -->
		</keep-alive>
		<!-- #endif -->
		<view class="bottom-block">
		</view>
	</view>
</template>

<script>
	import mescrollMoreItem from '../components/mescrollMoreItem.vue'
	export default {
		data() {
			return {
				current: '',
				classificationArray: [],
			}
		},
		onLoad() {
			uni.request({
				url: this.$websiteUrl + '/api/book/getClassification?classification=default',
				method: 'GET',
				success: (res) => {
					this.current = res.data.current
					this.classificationArray = res.data.classificationArray
				}
			})
		},
		methods: {
			
		},
		components: {
			mescrollMoreItem
		}
	}
</script>

<style lang="scss">
	.book-classification-page {
		
		.classification-scroll-view {
			position:fixed;
			top: var(--window-top);
			z-index:5;
			background-color: #ffffff;
			width: 690rpx;
			white-space: nowrap;
			padding:0 20rpx;
			
			.btn {
				display: inline-block;
				width: 120rpx;
				border: 1rpx solid #000000;
				border-radius: 30rpx;
				margin: 40rpx 20rpx;
				text-align: center;

				text {
					font-size: 28rpx;
					height: 50rpx;
					line-height: 50rpx;
				}
			}
			
			.active{
				border: 1rpx solid #FA3407;
				text {
					color:#FA3407;
				}
			}

		}
		
		.booklist-wrapper{
		}
		
		.bottom-block{
			height:50rpx;
		}
	}
</style>
