<template>
	<view class="background">
		<view class="bookHeader">
			<template v-if="haveFinished">
				<image :src="$imgUrl + bookitem.main_img"></image>
				<view class="headerContent">
					<text>{{bookitem.title}}</text>
					<view class = "bookAuthor">{{bookitem.author}} 著</view>
					<u-button :custom-style="removeBtn" @click="removeFavorite()" v-if="inFavorite">移出书架</u-button>
					<u-button :custom-style="addBtn" @click="addFavorite()" v-else>加入书架</u-button>
					<u-toast ref="uToast" />
				</view>
			</template>
		</view>
		<view class="bookDetail">
			<view class="detailContent" v-if="haveFinished">
				<view class="introduction" @click="allshowFlag = !allshowFlag">
					<text :class="[allshowFlag ? 'allIntro' : 'simpleIntro']">
						{{bookitem.content}}
					</text>					 
					<view class="triangle" v-if="allshowFlag">
						&#xeb21;
					</view>
					<view class="triangle" v-else>
						&#xe615;
					</view>
				</view>
				<view class="directory">					
				</view>				
				<view class="version">
					<view class="versionTitle">
						馆藏版本
					</view>
					<book-version-table  :bookVersions="bookitem.bookVersions"></book-version-table>
				</view>
			</view>			
			<view class="horizon">		
			</view>	
			<view class="locationContent">		
			</view>
		</view>	
	</view>
</template>

<script>
	import bookVersionTable from '../components/bookVersionTable.vue'
	export default {
		data() {
			return {
				bookitem:{},
				haveFinished:false,
				inFavorite: false,
				allshowFlag:false,
				removeBtn:{
					width: '180rpx',
					height: '70rpx',
					marginLeft: '0',
					marginTop: '40rpx',
					color: '#2979FF'
				},
				addBtn:{
					width: '180rpx',
					height: '70rpx',
					marginLeft: '0',
					marginTop: '40rpx'
				}
				
			}
		},
		onLoad(option){
			console.log(option)
			uni.request({
				url:this.$websiteUrl + '/api/book/search?id=' +option.id, 
				method:'GET',
				success:(res)=>{
					this.bookitem = res.data;
					this.bookitem.bookVersions.forEach((versionValue,versionIndex)=>{
						this.$set(versionValue,'showImg',false)
						this.$set(versionValue,'showInventoryFlag',false)
						this.mergeRowSpan(versionValue.bookInventories,'lib_name')
						this.mergeRowSpan(versionValue.bookInventories,'lib_room')
					})
					console.log(this.bookitem)			
					this.isFavoriteCheck();
					this.haveFinished = true;
				},
			})		
		},
		onShow(){	
			this.isFavoriteCheck();
		},
		methods: {
			showToast(title,type){
				this.$refs.uToast.show({
					title: title,
					type: type
				})
			},
			
			addFavorite(){
				this.$store.dispatch('addFavoriteBook', this.bookitem).then(()=>{
					this.inFavorite = true
					this.showToast("加入书架成功","success")
				},(e)=>{
					this.showToast("加入书架失败","fail")
				});				
			},
			removeFavorite(){
				this.$store.dispatch('removeFavoriteBook', this.bookitem.id).then(()=>{
					this.inFavorite = false
					this.showToast("移出书架成功","success")
				},(e)=>{
					this.showToast("移出书架失败","fail")
				});		
			},
			isFavoriteCheck(){
				this.$store.dispatch('getFavoriteBookList').then(res=>{
					if(res){
						let itemArray= res
						itemArray.forEach((item)=>{
							if(item.id == this.bookitem.id){
								this.inFavorite = true
							}
						})
					}
				})
			},
			mergeRowSpan(inventories,property){
				console.log("mergeRowSpan")
				let rowSpan = property+'RowSpan'
				let show = property+'Show'
				let lastInventoryValue  = inventories[0]
				let lastInventoryIndex = 0
				inventories.forEach((inventoryValue)=>{
					this.$set(inventoryValue,rowSpan, 1)
					this.$set(inventoryValue,show,'table-cell')	
				})
				inventories.forEach((inventoryValue,inventoryIndex)=>{
					if(inventoryIndex > 0){
						console.log("inventoryValue.lib_name"+inventoryValue.lib_name)
						if(inventoryValue.lib_name == lastInventoryValue.lib_name){
							inventories[lastInventoryIndex][rowSpan]++;
							console.log("versionValue.bookInventories[lastInventoryIndex].rowSpan"+inventories[lastInventoryIndex][rowSpan])
							inventoryValue[show] = 'none'
							console.log("inventoryValue.showThisItem"+inventoryValue[show])
						}
						else{
							lastInventoryIndex = inventoryIndex
						}
						lastInventoryValue = inventoryValue
					}		
				})
			}		
		},
		components:{ bookVersionTable}
	}
</script>

<style lang="scss">
	.background{
		background-color: #F2ECD6; 
	}
	
	.bookHeader{
		display: flex;
		padding:25rpx $uni-col-padding 75rpx;
		height:396rpx;
		
		image{
			height:296rpx;
			width:216rpx;
			border-radius: 10rpx;
		}
		
		.headerContent{
			flex: 1;
			margin: 0 0 10rpx 40rpx;
			text{
				font-size: 38rpx;
				font-weight: 600;
				height:70rpx;
				line-height: 70rpx;
			}
			.bookAuthor{
				margin:8rpx 0;
			}
		}
	}
	
	
	.bookDetail{
		padding: 40rpx 50rpx 80rpx 50rpx;
		background-color: #FFFFFF;
		border-top-left-radius: 55rpx;
		border-top-right-radius: 55rpx;
		
		.detailContent{
			margin:5rpx;
			
			.introduction{
				position:relative;
				.simpleIntro .allIntro{
					font-size: 28rpx;
					letter-spacing:1rpx;
					line-height: 40rpx;
					text-indent: 4em;
					padding-right:8rpx;
				}
				
				.simpleIntro{
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 4;
					-webkit-box-orient: vertical;
				}
				
				.triangle{
					position: absolute;
					bottom:-5rpx;
					right:-26rpx;
					font-size:40rpx;
					font-family: "iconfont" !important;
					font-style: normal;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
				}
			}
			
			.directory{
				
			}
			
			.version{
				.versionTitle{
					margin-top:60rpx;
					height:38rpx;
					line-height:38rpx;
					font-size: 38rpx;
				}
			}
		}
	}
	
	
</style>
