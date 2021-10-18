const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home/home.vue'),
  },
  {
    path: '/category',
    component: () => import('@/views/category/category.vue'),
  },
  {
    path: '/cart',
    component: () => import('@/views/cart/cart.vue'),
  },
  {
    path: '/profile',
    component: () => import('@/views/profile/profile.vue'),
  },
]

export default routes
