<template>
	<view class="artical-wrapper">
		<view class="header">
			图书馆地址信息
		</view>
		<view class="content">
			<view class="content-item">
				<view class="lib-name">
					杭州图书馆
				</view>
				<view class="lib-address">
					--杭州市解放东路58号市民中心J楼
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					杭财商分馆
				</view>
				<view class="lib-address">
					--杭州市下城区城北体育公园2幢
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					杭浣纱分馆
				</view>
				<view class="lib-address">
					--浙江省杭州市上城区浣纱路254号
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					杭康养分馆
				</view>
				<view class="lib-address">
					--杭州市江干区彭埠街道环站东路358号邻居中心裙楼2楼邻学社
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					萧山图书馆
				</view>
				<view class="lib-address">
					--浙江省杭州市萧山区市心中路958号
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					余杭图书馆
				</view>
				<view class="lib-address">
					--杭州余杭区南苑街道世纪大道 49 号
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					杭州少年儿童图书馆
				</view>
				<view class="lib-address">
					--浙江省杭州市西湖区曙光路75号
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					拱墅区图书馆
				</view>
				<view class="lib-address">
					--浙江省杭州市拱墅区北城街55号人防大厦B座1-2层
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					上城区图书馆
				</view>
				<view class="lib-address">
					--上城区中河中路62号
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					滨江区图书馆
				</view>
				<view class="lib-address">
					--滨江区泰安路200号
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					网易蜗牛读书馆
				</view>
				<view class="lib-address">
					--浙江省杭州市滨江区创慧街18号北塘河创新中心6号楼
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					下城区图书馆
				</view>
				<view class="lib-address">
					--杭州市潮王路8—1号
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					江干区图书馆
				</view>
				<view class="lib-address">
					--杭州市江干区太平门直街458号江干区文化中心6楼 
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					西湖区图书馆
				</view>
				<view class="lib-address">
					--古墩路413号
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					西湖文新分馆
				</view>
				<view class="lib-address">
					--竞舟路230号
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					西湖书房古荡分馆
				</view>
				<view class="lib-address">
					-- 古荡街道文化家园
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					西湖书房转塘分馆
				</view>
				<view class="lib-address">
					-- 东狮路9号
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					西湖书房蒋村分馆
				</view>
				<view class="lib-address">
					-- 云起路26号
				</view>
			</view>
			<view class="content-item">
				<view class="lib-name">
					西湖书房留下分馆
				</view>
				<view class="lib-address">
					-- 杨梅山路和家园中心广场327号-1社区文化家园内
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.artical-wrapper{
		margin:120rpx $uni-col-margin;
		.header{
			font-size: 60rpx;
			text-align: center;
		}
		.content{
			margin-top:100rpx;
			
			.content-item{
				margin-top:50rpx;
				.lib-name{
					font-size:36rpx;
				}
				.lib-address{
					font-size:28rpx;
				}
			}
		}
	}
</style>
