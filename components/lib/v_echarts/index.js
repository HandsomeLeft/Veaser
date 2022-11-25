import v_echarts from './src/main.vue'

v_echarts.install = function (Vue) {
  Vue.component(v_echarts.name, v_echarts)
}
export default v_echarts
