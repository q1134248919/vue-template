//引用方法
  import  axios from './https'

//测试接口
   export const getAccount=()=>{
        return  axios.get('/api/login/getAccount')
     }