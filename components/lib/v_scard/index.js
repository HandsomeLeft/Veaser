import v_scard from './src/main.vue'
console.log(1);
v_scard.install = function (Vue) {
  
  Vue.component(v_scard.name, v_scard)
}
export default v_scard
