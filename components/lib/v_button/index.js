import v_button from './src/main.vue'

v_button.install = function(Vue) {
    Vue.component(v_button.name, v_button)
}
export default v_button