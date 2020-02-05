const mongoose = require("mongoose")
//需要描述的文档结构 schema 
const userSchema = new mongoose.Schema({
    username:{type:String,require:true},//指代用户名
    password:{type:String,require:true},//密码
    phone:String,
    email:String
})
//定义model与集合对应，操作集合
const UserModel = mongoose.model("userhyn",userSchema)
//初始化超级管理员
UserModel.findOne({username:"admin"}).then(user=>{
    if(!user){
        UserModel.create({username:"admin",password:"admin"}).then(user=>{
        console.log("初始化的用户名为admin")
    })
    }
})

module.exports=UserModel