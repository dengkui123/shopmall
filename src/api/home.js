import request from 'common/request.js'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
