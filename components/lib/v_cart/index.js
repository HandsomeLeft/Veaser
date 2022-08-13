import v_cart from './src/main.vue'

v_cart.install = function (Vue) {
  Vue.component(v_cart.name, v_cart)
}
export default v_cart
