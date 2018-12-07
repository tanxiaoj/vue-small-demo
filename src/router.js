import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/template',
      name: 'template',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ 'views/template.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import(/* webpackChunkName: "about" */ 'views/showComponents.vue')
    }
  ]
})
