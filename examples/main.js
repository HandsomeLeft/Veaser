import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '../components/css/demo.scss'
import '../components/css/cart.scss'
import '../components/css/row.scss'
import '../components/css/header.scss'
import '../components/css/button.scss'
import v_demo from '../components/lib/v_demo/index.js'
import v_cart from '../components/lib/v_cart/index.js'
import v_row from '../components/lib/v_row/index.js'
import v_header from '../components/lib/v_header/index'
import v_button from '../components/lib/v_button/index'
Vue.use(v_demo)
Vue.use(v_cart)
Vue.use(v_row)
Vue.use(v_header)
Vue.use(v_button)

new Vue({
  render: h => h(App),
}).$mount('#app')
