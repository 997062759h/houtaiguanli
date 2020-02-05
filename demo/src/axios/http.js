import axios from "axios"
import qs from "qs"
import router from "../router"

//配置请求
//请求时长
axios.defaults.timeout = 200
axios.defaults.baseURL = process.env.VUE_APP_BASE_API
//axios 请求拦截器
axios.interceptors.request.use(config => {
    //可以设置发送的token
    return config
})
//axios 响应拦截器
axios.interceptors.response.use(res => {
    if (res.status == 200 && res.data.code === 0) {
        return Promise.resolve(res)
    } else {
        //提示
        return Promise.reject(res)
    }
})

// 封装对应的请求方法 get post
function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: params }).then((res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        }))
    })
}
/**
 * post 方法
 * @param url {string} 请求的url地址栏
 * @param params {object} 请求时携带的参数
 */
function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params)).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

/**
 * 上传图片
 * 
 * 
 * 
 */
function upload(url, data, handle) {
    let instance = anxios.create({
        //  代理
        withCredentials: false,
        baseURL: "",
        headers:{
            "Content-Type":"multipart/form-data"
        }
    })
    instance.post(url,data).then(res=>{
        handle(res.data)
    }).catch(err=>{
        console.log(err)
    })
}
//抛出
export { get, post, upload }