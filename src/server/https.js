
import axios from 'axios'
import Store from '../store'
axios.defaults.withCredentials = true
axios.defaults.crossDomain = true

 
// Add a response interceptor
axios.interceptors.request.use((config) => {
  // Do something before request is sent
  Store.dispatch('changeLoadingStatus')
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
axios.interceptors.response.use((response) => {
  Store.dispatch('changeLoadingStatus')
  if (!response.data) {
    // Store.dispatch('playMsg', response.data.description || '网络请求错误')
    return
  }
  return response.data
}, (error) => {
  Store.dispatch('changeLoadingStatus') // 如果加载不消失，用户无法做任何操作
  return Promise.reject(error)
})

export default axios