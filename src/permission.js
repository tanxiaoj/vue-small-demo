// 路由跳转权限控制
import Vue from 'vue'
import store from './store'
import router from './router'

router.beforeEach((to, from, next) => {
  console.log(store.getters.token)
  if (store.getters.token == 'this is token') {
    next()
  } else if (store.getters.token != 'this is token' && to.path !== '/login') {
    var app = new Vue()
    next()
    app.$toast('你暂时没有登录,即将跳转到登录页')
    setTimeout(() => {
      next({ path: '/login' })
    }, 1000)
  } else {
    next()
  }
  // 路由守卫

  // to: Route: 即将要进入的目标 路由对象

  // from: Route: 当前导航正要离开的路由

  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
})

router.afterEach((to, from) => {

})
