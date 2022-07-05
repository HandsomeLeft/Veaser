import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '../components/css/demo.scss'
import '../components/css/cart.scss'
import v_demo from '../components/lib/v_demo/index.js'
import v_cart from '../components/lib/v_cart/index.js'
Vue.use(v_demo)
Vue.use(v_cart)

new Vue({
  render: h => h(App),
}).$mount('#app')
