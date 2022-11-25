import v_translater from './src/main.vue'
import { VueJsonp } from 'vue-jsonp'
import VueResource from 'vue-resource'

v_translater.install = function (Vue) {
  Vue.component(v_translater.name, v_translater)
  Vue.use(VueResource)
  Vue.use(VueJsonp)
}
export default v_translater
