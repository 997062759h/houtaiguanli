const express = require("express")
const Usermodel = require("./model/usermodel")
const router = express.Router()

//password 需要加密  md5
router.post("/login", (req, res) => {
    //get 用query  POST用body
    const { username, password } = req.body

    Usermodel.findOne({
        username, password
    }).then(data => {
        console.log(data)
        //如果登录成功
        console.log(data)
        if (data) {
            res.cookie("userid", user._id, { maxAge: 1000 * 60 * 60 * 24 })
            //角色管理
            res.send({
                data:"登录成功",
                code:0
            })
        }else{
            res.send({
                code:1,
                err:"登录失败"
            })
        }
    })
})

/**
 * 完善登录接口
 * 看mongoose文档
 * 前后端数据交互
 *
 *
 *
 */
module.exports = router