import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './styles/main.sass';

import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueSmoothScroll, {
  duration: 1000,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
