import request from 'common/request.js'

// 获取首页图片等资源
export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
    methods: 'get'
  })
}
// 获取商品列表
export function getHomeGoods(params) {
  return request({
    url: '/home/data',
    method: 'get',
    params
  })
}
