import Vue from 'vue'
import App from './App.vue'
import router from './router'
import toast from 'components/toast/index'

import * as filters from './filters' // global filters

Vue.use(toast)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
