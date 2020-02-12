<template>
  <div class="about">
    <h1>This is an login page</h1>
    <el-input v-model="obj.user" class='inp' placeholder="用户名"></el-input>
    <el-input v-model="obj.password" class='inp' show-password placeholder="密码"></el-input>
     <el-button @click='submits' type="primary" round>登录</el-button>
  </div>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      obj: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    submits () {
      axios.post('/login', this.obj)
        .then(res => {
          Cookies.set('token', res.data.data.token)
          this.$store.commit('RulesBol', false)
          this.$router.push({ name: 'home' })
        })
    }
  }
}
</script>
<style scoped>
  .inp{
    width: 200px
  }
</style>
