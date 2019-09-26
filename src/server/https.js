import Store from './../store'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.crossDomain = true

axios.defaults.baseURL = ''   //设置你的基础url;
// Add a response interceptor
axios.interceptors.request.use((config) => {
  // Do something before request is sent
  Store.dispatch('changeLoadingStatus', true)
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
axios.interceptors.response.use((response) => {
  /* if (response.data.status) {
    return response.data.data;
  } else {
    //return vm.showHint(response.data.description);
  } */
  Store.dispatch('changeLoadingStatus', false)
  if (!response.data.status) {
    // Store.dispatch('playMsg', response.data.description || '网络请求错误')
    return
  }
  return response.data
}, (error) => {
  Store.dispatch('changeLoadingStatus', false) // 如果加载不消失，用户无法做任何操作
  return Promise.reject(error)
})

export default axios