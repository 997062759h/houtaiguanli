<template>
  <div class="wrap">
    <div class="login">
      <h3>用户登录</h3>
      <el-input v-model="username" placeholder="请输入用户名" style="margin-top:48px" class="username"></el-input>
      <el-input v-model="password" placeholder="请输入密码" class="password"></el-input>
      <el-button type="success" style="width:300px" @click="land">登录</el-button>
    </div>
  </div>
</template>

<script>
import {login} from '../api/index'
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
   methods: {
     land(){
      login({username:this.username,password:this.password}).then(res=>{
        console.log(res)
      })
  


     }
     
   }
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #4ab344 0%, #d5f6d3 100%, #edf9ec 100%);
}
.login {
  width: 300px;
  height: 380px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -160px;
  margin-top: -160px;
  background: #fff;
  padding: 10px 20px;
  box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
}
.login h3 {
  text-align: center;
  font-size: 18px;
  margin-top: 24px;
}
.el-input {
  margin-bottom: 20px;
}
</style>