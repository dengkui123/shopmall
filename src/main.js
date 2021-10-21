import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ScrollView from 'components/common/scroll/ScrollView.vue'

import 'assets/font/font.css'

Vue.component('scroll-view', ScrollView);

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
