import v_cart from './v_cart'
import v_demo from './v_demo'
import v_row from './v_row'
import v_header from './v_header'
import v_button from './v_button'

const components = {
    v_cart,
    v_demo,
    v_row,
    v_header,
    v_button
}

const install = function(Vue) {
    if(install.installed) {
        return
    }
    Object.keys(components).forEach(key =>{
        Vue.component(components[key].name,components[key])
    })
}

const API = {
    install
}
export default API