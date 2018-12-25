<template>
  <div class="login">
    <h1>登录</h1>
    <div class="user">
        <span>用户名：</span>
        <input type="text" v-model="username" placeholder="请输入用户名">
    </div>
    <div class="password">
        <span>密码：</span>
        <input type="password" v-model="password" placeholder="请输入密码">
    </div>
    <div class="loginBtn" @click="login">登录</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { setVisitMixin } from 'common/js/mixin'

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  created () {
  },
  mixins: [setVisitMixin],
  methods: {
    login () {
      if (this.username === 'admin' && this.password === '123') {
        if (this.token == 'this is token') {
          this.$toast('已有账号登录')
        } else {
          this.$toast('登录成功')
          this.setToken({
            token: 'this is token'
          })
          localStorage.setItem('token', 'this is token')
        }
        this.$router.push('/')
      } else {
        this.$toast('登录失败')
      }
    },
    ...mapActions([
      'setToken'
    ])
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.login {
    padding: 0 20px;
    .user, .password{
        overflow: hidden;
        margin-bottom: 10px;
        span {
            font-size: 14px;
            color: #666;
            float: left;
            width: 60px;
        }
        input {
            float: left;
            outline: medium;
            margin-left: 10px;
        }
    }
    .loginBtn{
        float: left;
    }
}
</style>
