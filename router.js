import {RouterMount,createRouter} from 'uni-simple-router';
import store from 'store/store.js'

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,  
	routes: [...ROUTES]
});

router.beforeEach((to, from, next) => {
	if(to.meta.loginCheck && !store.state.isLogin){
		if(store.state.token){
			console.log("验证通过")
			next();
		}else{
			console.log("跳转到登录页面")
			next({name:'login'})
		}
	}else{
		console.log("无需验证")
		next();
	}
});

router.afterEach((to, from) => {
    console.log('跳转结束')
})

export {
	router,
	RouterMount
}