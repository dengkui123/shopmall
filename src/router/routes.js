const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/home/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    component: () => import('views/category/Category.vue'),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    component: () => import('views/cart/Cart.vue'),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile.vue'),
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/detail/:id',
    component: () => import('views/detail/Detail.vue'),
    meta: {
      title: '商品详情'
    }
  }
]

export default routes
