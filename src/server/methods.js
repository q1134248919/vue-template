import axios from './https'

    // 默认 GET 方法
  export  const httpGet=(url, params)=>{
       axios.get(url, params ? { params: params } : {})
      }
      // 默认 POST 方法
  export   const httpPost=(url, params, option)=>{
        axios.post(url, params || {}, option || {})
      }
 