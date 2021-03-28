<template>
	<view class="login-wrapper">
		<navigator url="./register" hover-class="none">
			<view class="register">
				注册
			</view>
		</navigator>
		<view class="login-way">
			<view class="username-login" :class="[loginWay == 'username' ? 'bottom-line' : 'no-bottom-line']" @click="loginWay = 'username'">
				用户名登录
			</view>
			<view class="phonenumber-login" :class="[loginWay == 'phonenumber' ? 'bottom-line' : 'no-bottom-line']" @click="loginWay = 'phonenumber'">
				手机号登录
			</view>
		</view>
		<view class="input-form">
			<template v-if=" loginWay == 'username'">
				<form @submit="formSubmit1">
					<view class="input-form-item">
						<view class="item-left">
							<view class="customer-logo">&#xe648;</view>
						</view>
						<input type="text" name="username" placeholder="请输入用户名"/>
					</view>
					<view class="input-form-item">
						<view class="item-left">
							<view class="customer-logo">&#xe646;</view>
						</view>
						<input type="text" password="true" name="password" placeholder="请输入密码"/>
					</view>
					<view class="forget-password">忘记密码?</view>
					<view class="tip-word">
						<text>{{TipWord}}</text>
					</view>
					<view class="input-btn">
						<button form-type="submit">登录</button>
					</view>
				</form>
			</template>
			<template v-else>
				<form @submit="formSubmit2">
					<view class="input-form-item">
						<view class="item-left">
							<text>+86</text>
						</view>
						<input type="text" name="phonenumber" placeholder="请输入手机号"/>
					</view>
					<view class="input-form-item">
						<view class="item-left"></view>
						<input type="text" password="true" name="password" placeholder="请输入密码"/>
					</view>
				<view class="forget-password">忘记密码?</view>
					<view class="tip-word">
						<text>{{TipWord}}</text>
					</view>
					<view class="input-btn">
						<button form-type="submit">登录</button>
					</view>
				</form>
			</template>
		</view>
	</view>
</template>

<script>
	import CryptoJS from "../../common/crypto-js/crypto-js.js"
	export default {
		data() {
			return {
				loginWay:"username",
				TipWord:""
			}
		},
		methods: {
			formSubmit1(e){
				let {username, password} = e.detail.value;
				if(!username){
					this.TipWord = "用户名不能为空";
					return;
				}
				if(!password){
					this.TipWord = "密码不能为空";
					return;
				}
				
				let userInfo = {
					username: username,
					password: CryptoJS.MD5(password).toString()
				}
				
				this.login(userInfo);
			},
			formSubmit2(e){
				let {phonenumber, password} = e.detail.value;
				if(!phonenumber){
					this.TipWord = "手机号不能为空";
					return;
				}
				if(!password){
					this.TipWord = "密码不能为空";
					return;
				}
				
				let userInfo = {
					phonenumber: phonenumber,
					password: CryptoJS.MD5(password).toString()
				}
				
				this.login(userInfo);
			},
			login(userInfo){
				uni.request({
					url:this.$websiteUrl+ "/api/login",
					method: 'POST',
					data:userInfo,
					success:(res)=>{
						if(res.statusCode == '200'){
							if(res.data.success){
								this.$store.dispatch('loginSuccess', res.data).then(()=>{
									console.log("登录成功")
									uni.switchTab({
										url:"/pages/account/account",
										success:()=>{
											console.log(跳转成功)
										},
										fail:(err)=>{
											console.log(err)
										}
									})
								},(e)=>{
									this.TipWord = "保存token失败"
								});	
							}else{
								this.TipWord = res.data.message
							}
						}else{
							this.TipWord = "登录验证失败"
						}			
					}
				})
			}
		},
		onLoad() {
			uni.$on('login',(userInfo)=>{
				this.login(userInfo)
			})
		},
		onUnload() {
			uni.$off('login')
		}
	}
</script>

<style lang="scss">
	.login-wrapper{
		padding:0 120rpx;
		position:relative;
		.register{
			position:absolute;
			top:30rpx;
			right:50rpx;
			font-size:36rpx;
		}
		.login-way{
			display:flex;
			justify-content: space-around;
			padding-top:250rpx;

			.customer-login{
				padding:0 15rpx 20rpx 15rpx;
			}
			.phonenumber-login{
				padding:0 15rpx 20rpx 15rpx;
			}
			
			.bottom-line{
				border-bottom: 3rpx solid #007AFF;
			}
			
			.no-bottom-line{
				border-bottom: 3rpx solid #FFFFFF;
			}
		}
		.input-form{
			padding-top:50rpx;
			.input-form-item{
				display:flex;
				align-items:center;
				height:100rpx;
				line-height:100rpx;
				padding-top:15rpx;
				border-bottom:3rpx solid #e5e5e5;
				
				.item-left{
					width:120rpx;
					text-align:center;
					font-size:30rpx;
					.customer-logo{
						font-family: "iconfont" !important;
						font-style: normal;
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
						font-size:36rpx;
					}
					text{
						border-right:2rpx solid #e5e5e5;
						padding-right:20rpx;
					}
				}
				input{
					flex:1;
					font-size:28rpx;
				}	
			}
			.forget-password{
				float:right;
				margin-top:28rpx;
			}
			.input-btn{
				margin:250rpx 50rpx;
			}
		}
	}
</style>
