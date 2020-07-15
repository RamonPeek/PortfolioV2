import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import vueScrollto from 'vue-scrollto'

Vue.config.productionTip = false
Vue.use(vueScrollto, {
  container: "#site_container",
  duration: 700,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
