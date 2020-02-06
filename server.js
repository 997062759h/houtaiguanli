// //服务端
// //express 作为服务器 mongoose 作为数据库
// //只有链接到数据库才可以启动服务器
// const express=require("express")
// const mongoose =require("mongoose")
// const cookieParser = require("cookie-parser")
// //文件系统
// const fs=require("fs")
// const app = express()
// //需要声明中间件  静态资源
// app.use(express.static("static"))
// // bodyparser 处理post请求
// //处理post请求
// //处理字符串
// app.use(express.urlencoded({extended:false}))  //处理请求的结构体 {username=tom&password:123}
// //处理对象
// app.use(express.json()) //处理请求的结构体 {username=tom&password:123}
// //缓存 express-session  cookie-parser
// app.use(cookieParser())
// const router=require("./router/index")
// app.use("/",router)
// app.use((req,res)=>{
//     fs.readFile(__dirname+"/index.html",(err,data)=>{
//         if(err){
//             res.send("后台错误")
//         }else{
//             console.log(data)
//             res.writeHead(200,{"content-type":"text/html:charset=utf-8"})
//             // res.send(data)
//         }
//     })
// })

