import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL : 'http://localhost:3000',
        timeout : 5000
    })
    //拦截发送出去之前的请求
    instance.interceptors.request.use(config => {
        return config
    },error => console.log(error))
    instance.interceptors.response.use(res => {
        if(res.data.isSuccess){
            return res.data.data
        }
        return Promise.reject(res.data)
    }, error => console.log(error))
    return instance(config)
}