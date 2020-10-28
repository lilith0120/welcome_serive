import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'

// axios.defaults.baseURL = 'http://www.chenzhimeng.top:9000/'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
