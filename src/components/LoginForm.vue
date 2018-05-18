<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="userNameModel" placeholder="请输入用户名"/>
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码"/>
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="login">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      userNameModel: '',
      passwordModel: '',
      errorText: ''
    }
  },
  computed: {
    userErrors () {
      let status = true
      let errorText = ''
      if (!/@/g.test(this.userNameModel)) {
        status = false
        errorText = '不包含@'
      }
      if (!this.userFlag) {
        errorText = ''
        this.changeFlag('userFlag')
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors () {
      let status = true
      let errorText = ''
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        status = false
        errorText = '密码为1-6位'
      }
      if (!this.passwordFlag) {
        errorText = ''
        this.changeFlag('passwordFlag')
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    login () {
      if (!this.userErrors.status || !this.passwordErrors.status) {
        this.errorText = '部分参数检验不合格'
      } else {
        this.errorText = ''
        this.$http.post('api/login').then((res) => {
          this.$emit('has-log', res.data)
        }, (error) => {
          console.log(error)
        })
      }
    },
    changeFlag (flag) {
      this[flag] = true
    }
  }
}
</script>

<style scoped>

</style>
