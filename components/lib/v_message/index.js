import v_message from './src/main.vue'

let instances = []
let verticalTop = 16

v_message.install = function (Vue) {
  Vue.component(v_message.name, v_message)

  function computedVerticalTop() {
    return instances.reduce((acc, cul) => {
      return cul.$el.offsetHeight + acc + verticalTop
    }, verticalTop)
  }

  function generateInstance(options) {
    const Ctor = Vue.extend(v_message)

    let instance = new Ctor({
      propsData: options
    }).$mount(document.createElement('div'))

    instance.verticalTop = computedVerticalTop()

    return instance
  }
  Vue.prototype.$message = function (options) {
    let instance = generateInstance(options)
    instances.push(instance)
  }
}
export default v_message
