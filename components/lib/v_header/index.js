import v_header from './src/main.vue'

v_header.install = function (Vue) {
  Vue.component(v_header.name, v_header)
}
export default v_header
