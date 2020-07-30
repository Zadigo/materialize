import Vue from 'vue'
import App from './App.vue'
import router from './router'

import NavBar from '@/components/navs/NavBar.vue'

Vue.config.productionTip = false

Vue.component('NavBar', NavBar)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
