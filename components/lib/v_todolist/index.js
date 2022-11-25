import v_todolist from './src/main.vue'

v_todolist.install = function (Vue) {
  Vue.component(v_todolist.name, v_todolist)
}
export default v_todolist
