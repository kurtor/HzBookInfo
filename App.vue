<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.getStorage({
				key:"token",
				success:(res)=>{
					uni.request({
						url:this.$websiteUrl+'/api/token/refresh',
						header:{
							"Content-Type": "application/json",
							"Authorization":"Bearer " + res.data,
						}, 
						method:"GET",
						success:(res)=>{
							console.log(res)
							if(res.statusCode == '200'){
								if(res.data.success){ 
									this.$store.dispatch('loginSuccess', res.data).then(()=>{
										console.log(res.data.message)
									});		
								}
							}
						}
					})
				},
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/uview-ui/index.scss"; 
	/*每个页面公共css */
	@font-face {
	  font-family: 'iconfont';
	  src: url('./static/iconfont/iconfont.eot');
	  src: url('./static/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
	      url('./static/iconfont/iconfont.woff2') format('woff2'),
	      url('./static/iconfont/iconfont.woff') format('woff'),
	      url('./static/iconfont/iconfont.ttf') format('truetype'),
	      url('./static/iconfont/iconfont.svg#iconfont') format('svg');
	};
	
	::-webkit-scrollbar {  
	    display: none;  
	    width: 0 !important;  
	    height: 0 !important;  
	    -webkit-appearance: none;  
	    background: transparent;  
	}

</style>
