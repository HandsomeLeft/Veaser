import v_cart from './v_cart'
import v_demo from './v_demo'
import v_row from './v_row'
import v_header from './v_header'
import v_button from './v_button'
import v_spinner from './v_spinner'
import v_accordion from './v_accordion'
import v_scard from './v_scard'
import v_icon from './v_icon'
const components = {
  v_cart,
  v_demo,
  v_row,
  v_header,
  v_spinner,
  v_button,
  v_scard,
  v_accordion,
  v_icon
}

const install = function (Vue) {
  if (install.installed) {
    return
  }
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

const API = {
  install
}
export default API
