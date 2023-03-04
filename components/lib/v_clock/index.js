import v_clock from './src/main.vue'

v_clock.install = function (Vue) {
  Vue.component(v_clock.name, v_clock)
}
export default v_clock
