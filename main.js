import Vue from 'vue'
import App from './App'
import store from './store/store.js'
import uView from "@/uview-ui"
import {router, RouterMount} from './router.js'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$websiteUrl = "https://www.9du.club"
Vue.prototype.$imgUrl = "http://gitee.com/kurtor/hz-book-info/raw/master/"
Vue.prototype.$EventBus = new Vue();

App.mpType = 'app'

Vue.use(store)
Vue.use(uView)
Vue.use(router)

const app = new Vue({
	...App
})

//#ifdef H5
	RouterMount(app,router,"#app")
//#endif

//#ifndef H5	
	app.$mount()
//#endif