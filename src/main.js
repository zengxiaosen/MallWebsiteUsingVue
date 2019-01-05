// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import Vuex from 'vuex'
// import {sum,minus} from "./util";
// import * as util from './util'

Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  loading:"/static/loading-svg/loading-bars.svg"
})

Vue.use(infiniteScroll)

//通过Vue.use去用import的插件
Vue.use(Vuex)

// console.log(`sum:${util.sum(1, 6)}`)
// console.log(`minus:${util.minus(10, 2)}`)

const store = new Vuex.Store({
  state: {
    nickName:'',
    cartCount:0
  },
  mutations: {
    //更新用户信息
    updateUserInfo(state, nickName) {
      state.nickName = nickName;
    },
    updateCartCount(state,cartCount){
      state.cartCount += cartCount;
    }
  }
});
/* eslint-disable no-new */
new Vue({
  //监听app
  el: '#app',

  store,
  router,
  mounted(){
    this.checkLogin();
    this.getCartCount();
  },
  methods:{
    checkLogin(){
      axios.get("users/checkLogin").then(res=> {
        var res = res.data;
        if (res.status == "0") {
          this.$store.commit("updateUserInfo", res.result);
        }else{
          if(this.$route.path!="/goods"){
            this.$router.push("/goods");
          }
        }
      });
    },
    getCartCount(){
      axios.get("users/getCartCount").then(res=>{
        var res = res.data;
        if(res.status=="0"){
          this.$store.commit("updateCartCount",res.result);
        }
      });
    }
  },
  components: { App },
  template: '<App/>'
})


