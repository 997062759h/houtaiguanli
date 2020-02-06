const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const router=require("./router")
router.all("*", function (req, res, next) {
    res.setHeader("Access-Control-Allow-origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "get,put,post")
    next()
})
var app = express()
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)
mongoose.connect("mongodb://127.0.0.1:27017/userhyn", { useNewUrlParser: true }).then(() => {
    console.log("数据库连接成功")
    app.listen(5000, () => {
        console.log("服务器启动")
    })
}).catch(error => {
    console.log("数据库失败")
})
