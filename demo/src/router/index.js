//路由懒加载，按需加载 
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode:"history",
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/login.vue")
    },
    {
      path: "/user",
      name: "user",
      component: () => import("../views/user.vue")
    },
    {
      path: "/shop",
      namae: "shop",
      component: () => import("../views/shop.vue")
    },
    {
      path: "/order",
      name: "order",
      component: () => import("../views/order.vue")
    }, {
      path: "/chart",
      name: "chart",
      component: () => import("../views/chart.vue")
    },
    {
      path:"/home",
      name:"",
      component:()=>import("../views/home.vue")
    }
  ]
})
