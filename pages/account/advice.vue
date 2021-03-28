<template>
	<view class="advice-wrapper">
		<u-form :model="form" ref="uForm">
			<u-form-item label="建议" label-position="top" prop="advice" >
				<u-input type="textarea" height="300" v-model="form.advice"/>
			</u-form-item>
			<u-form-item label="邮箱" label-position="top" prop="email">
				<u-input type="input" v-model="form.email" @input="inputEmail"/>
			</u-form-item>
		</u-form>
		<view class="tips">{{tips}}</view>
		<view class="btn">
			<u-button @click="submit">提交</u-button>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					advice: "",
					email: "",
				},
				tips:""
			}
		},
		methods: {
			submit() {
				const advice = this.form.advice;
				const email = this.form.email;
				if(!advice){
					this.tips = "建议不能为空"
					return;
				}
				if(!email){
					this.tips = "邮箱不能为空"
					return;
				}else{
					if(!RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/).test(email)){
						this.tips = "邮箱格式错误"
						return;
					}
				}
			},
			inputEmail(){
				this.tips = ""
			}
		}
	}
</script>

<style lang="scss">
	.advice-wrapper{
		margin:50rpx $uni-col-margin;
		
		.tips{
			height:30rpx;
		}
		
		.btn{
			margin:80rpx 100rpx;
		}
	}
</style>
