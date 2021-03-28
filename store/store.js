import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) 

const store = new Vuex.Store({
	state(){
		return{
			favoriteBookList: [],
			token:"",
			userInfo:{
				username:"",
				phonenumber:""
			},
			isLogin:false,
		}
	},
	mutations:{
		setToken(state, token){
			state.token = token;
			uni.setStorageSync("token", token);
		},
		clearToken(){
			uni.removeStorageSync("token");
		},
		setUserInfo(state,userInfo){
			state.userInfo = userInfo;
			console.log(userInfo)
			state.isLogin = true;
		},
		clearUserInfo(state){
			state.userInfo = {
				username:"",
				phonenumber:""
			};
			state.isLogin = false;
		}
	},
	
	actions:{
		loginSuccess:(context,data)=>{
			return new Promise((resolve, reject) => {
				if(data.token){
					context.commit('setToken',data.token)
				}
				context.commit('setUserInfo',data.userInfo)
				resolve()
			})	
		},
		logoutSuccess:(context)=>{
			return new Promise((resolve, reject) => {
				context.commit('clearToken')
				context.commit('clearUserInfo')
				resolve()
			})	
		},
		getFavoriteBookList:(state)=>{
			return new Promise((resolve, reject) => {
				uni.getStorage({key:'favoriteBookList',success(e){
						let item = JSON.parse(e.data);
						state.favoriteBookList = item;
						resolve(state.favoriteBookList);
					}
				})	
			})
		},
		addFavoriteBook: (state, bookItem)=>{
			return new Promise((resolve, reject) => {
				const favoriteBookItem = {
					id: bookItem.id,
					main_img: bookItem.main_img,
					title: bookItem.title,
					author: bookItem.author,
					content: bookItem.content,
					classification: bookItem.classification,
				}
				uni.getStorage({key:'favoriteBookList',success(e){
						let item = JSON.parse(e.data)
						item.push(favoriteBookItem)
						console.log("item 不空，追加成功")
						uni.setStorage({key:"favoriteBookList",data:JSON.stringify(item)})
						state.favoriteBookList = item
						resolve()
					},fail(e){
						if(!e.date){
							let new_item = [favoriteBookItem]
							console.log("item 空，添加成功")
							uni.setStorage({key:"favoriteBookList",data:JSON.stringify(new_item)})
							state.favoriteBookList = new_item
							resolve()
						}else{
							reject(e)
						}
					}
				})
			})	
		},
		removeFavoriteBook:(state, id)=>{
			return new Promise((resolve, reject) => {
				uni.getStorage({key:'favoriteBookList',success(e){
						let itemArray = JSON.parse(e.data)
						let deleteIndex = itemArray.findIndex(item=>{
							console.log("item"+item)
							console.log("id"+id)
							return item.id == id
						})
						itemArray.splice(deleteIndex,1)
						uni.setStorage({key:"favoriteBookList",data:JSON.stringify(itemArray)})
						resolve()
					},fail(e){
						reject(e)
					}
				})
			})
		}
	}
	
})

export default store;