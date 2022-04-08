<template>
  <el-card class="box-card">
    <el-form>
      <h3>登录系统</h3>
      <el-form-item>
        <el-input v-model="loginForm.account" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { myRequest } from '@/service';
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        account: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      console.log(this.loginForm.account);
      console.log(this.loginForm.password);

      myRequest
        .post('/user/login', this.loginForm)
        .then((res) => {
          if (res.code === 1) {
            this.$message.success('登录成功');
            this.$router.push('/main');
          } else {
            this.$message.error(res.msg);
            this.$router.push('/main');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.box-card {
  margin: 100px auto;
  width: 400px;
}
</style>
