import axios from 'axios'

const request = axios.create({
  baseURL: 'http://47.94.151.33:8890/api',
  timeout: 15000
})
// 1. 请求拦截器
request.interceptors.request.use(config => {
  return config
}, err => {
  throw new Error(err)
})

// 2. 响应拦截器
request.interceptors.response.use(res => {
  return res.data
}, err => {
  throw new Error(err)
})

export default request
