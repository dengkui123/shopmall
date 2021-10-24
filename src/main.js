import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 图片懒加载
import VueLazyload from 'vue-lazyload'
// 滚动组件
import ScrollView from 'components/common/scroll/ScrollView.vue'
// 封装的土司组件
import toast from 'components/common/toast/index.js'
import 'assets/font/font.css'

Vue.component('scroll-view', ScrollView);

// 添加事件总线对象
Vue.prototype.$bus = new Vue()

Vue.use(toast)
Vue.use(VueLazyload, {
  loading: require('assets/img/common/placeholder.png'),
  error: require('assets/img/common/placeholder_error.png')
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
