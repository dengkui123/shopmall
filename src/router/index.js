import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'hash'
})

router.beforeEach((to, from, next) => {
  console.log(to, from);
  if (to.matched[0].meta.title) {
    document.title = to.matched[0].meta.title;
  }
  next();
})
export default router
