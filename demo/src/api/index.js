//写具体的请求方法
import {get,post,upload} from "../axios/http"
function login(params){
    return post("/api/login",params)
}
export {login}
