import v_row from './src/main.vue'

v_row.install = function (Vue) {
    Vue.component(v_row.name,v_row)
}
export default v_row