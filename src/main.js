import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'

axios.defaults.baseURL = 'http://welcome.fzuhelper.w2fzu.com/'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
