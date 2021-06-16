import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueMq from 'vue-mq'

Vue.config.productionTip = false
Vue.use(VueMq, {
  breakpoints: {
    screenPhone: 767,
    screenDesktop: 1250
  }
});

new Vue({
  store,
  VueMq,
  render: h => h(App)
}).$mount('#app')
