import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import sidebar from '../store/modules/sidebar'
import overlay from '../store/modules/overlay'
import menuItems from '../store/modules/menuItems'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    sidebar,
    overlay,
    menuItems
  }
})
