import v_demo from './src/main.vue'

v_demo.install = function (Vue) {
    Vue.component(v_demo.name,v_demo)
}
export default v_demo