// 路由跳转权限控制

import router from './router'

router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象

  // from: Route: 当前导航正要离开的路由

  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
})

router.afterEach((to, from) => {

})
