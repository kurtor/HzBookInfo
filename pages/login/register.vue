<template>
	<view class="register-wrapper">
		<view class="input-form">
			<form @submit="registerSubmit">
				<view class="input-form-item">
					<view class="item-left">
						<text>用户名</text>
					</view>
					<input type="text" name="username" focus="true" :placeholder="usernameEmpty" @input="TipWord = ''"/>
				</view>
				<view class="input-form-item">
					<view class="item-left">
						<text>手机号</text>
					</view>
					<input type="text" name="phonenumber" :placeholder="phonenumberEmpty" @input="TipWord = ''"/>
				</view>
				<view class="input-form-item">
					<view class="item-left">
						<text>密码</text>
					</view>
					<input type="text" password="true" name="password" :placeholder="passwordEmpty" @input="TipWord = ''"/>
				</view>
				<view class="input-form-item">
					<view class="item-left">
						<text>确认密码</text>
					</view>
					<input type="text" password="true" name="password2" :placeholder="passwordEmpty" @input="TipWord = ''"/>
				</view>
				<view class="tip-word">
					<text>{{TipWord}}</text>
				</view>
				<view class="input-btn">
					<button form-type="submit">注册</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import CryptoJS from "../../common/crypto-js/crypto-js.js"
	export default {
		data() {
			return {
				usernameEmpty:"",
				phonenumberEmpty:"",
				passwordEmpty:"",
				TipWord:""
			}
		},
		methods: {
			registerSubmit:function(e){
				let {username, phonenumber, password, password2} = e.detail.value
				if(!username || !phonenumber || !password ||!password2){
					this.usernameEmpty = "用户名不能为空"
					this.phonenumberEmpty = "手机号不能为空"
					this.passwordEmpty = "密码不能为空"
					return;
				}
				if(password != password2){
					this.TipWord ="两次密码不一致"
				}
				if(!RegExp(/^1[34578]\d{9}$/).test(phonenumber)){
					this.TipWord ="手机号格式错误"
				}
				console.log("本地通过校验");
				uni.request({
					url: this.$websiteUrl + `/api/register?username=${username}&phonenumber=${phonenumber}`,
					method:'get',
					success:(res)=>{
						if(!res.data.userNameValid){
							this.TipWord ="用户名已被注册"
						}else if(!res.data.phonenumberValid){
							this.TipWord ="该手机号已注册"
						}else{
							console.log("远程通过校验");
							const data ={
								username:username,
								phonenumber:phonenumber,
								password:CryptoJS.MD5(password).toString()
							}
							console.log("准备注册数据发送");
							console.log(data);
							uni.request({
								header:{
									'Content-Type': 'application/json'
								},
								url: this.$websiteUrl + '/api/register',
								data: data,
								method:'POST',
								success:(res)=>{
									if(res.data.message == "success"){
										console.log("注册成功")
										this.TipWord = "";
										uni.$emit('login',{
											username:username,
											password:CryptoJS.MD5(password).toString()
										})
									}else{
										console.log("注册失败")
										this.TipWord = "注册失败";
									}
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.register-wrapper{
		padding:0 120rpx;
		position:relative;
		.input-form{
			padding-top:250rpx;
			.input-form-item{
				display:flex;
				align-items:center;
				height:100rpx;
				line-height:100rpx;
				padding-top:15rpx;
				border-bottom:3rpx solid #e5e5e5;
				
				.item-left{
					width:140rpx;
					text-align:center;
					font-size:30rpx;
					height:30rpx;
					line-height:30rpx;
					border-right:2rpx solid #e5e5e5;
					margin-right:20rpx;
					.customer-logo{
						font-family: "iconfont" !important;
						font-style: normal;
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
						font-size:36rpx;
					}
				}
				input{
					flex:1;
					font-size:28rpx;
				}	
			}
			.input-btn{
				margin:160rpx 50rpx;
			}
		}
	}
</style>

