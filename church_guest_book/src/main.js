import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import GuestAPIService from '@/services/GuestService'


Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$guest_api = GuestAPIService

new Vue({
  render: h => h(App),
}).$mount('#app')
