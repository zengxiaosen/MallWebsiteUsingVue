import Vue from 'vue'
import Router from 'vue-router'
import GoodList from './../views/GoodsList'

import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from './../views/Cart'
import Address from './../views/Address'
import OrderConfirm from "../views/OrderConfirm";
import OrderSuccess from "../views/OrderSuccess"

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
     path:'/',
      name: 'GoodsList',
      component:GoodList
    },
    {
      path: '/cart',
      name: 'Cart',
      component:Cart
    },
    {
      path:"/address",
      name:'Address',
      component:Address
    },
    {
      path:"/orderConfirm",
      name:"OrderConfirm",
      component:OrderConfirm
    },
    {
      path:"/orderSuccess",
      name:"OrderSuccess",
      component:OrderSuccess
    }
  ]
})
