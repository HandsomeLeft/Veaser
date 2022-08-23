import v_accordion from './src/main.vue'

v_accordion.install = function(Vue) {
    Vue.component(v_accordion.name, v_accordion)
}
export default v_accordion