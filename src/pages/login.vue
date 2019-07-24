<template>
  <div class="login">
    <input type="text" placeholder="请输入身份证号" maxlength="18" class="idcard" v-model="idcard">
    <input type="password" placeholder="请输入密码" class="login-pw" v-model="pw">
    <div class="btns-box">
      <router-link to="/register">新学员注册</router-link>
      <router-link to="/resetpw">忘记密码</router-link>
    </div>
    <button class="confirm" @click="tijiao">确定</button>
    <a href="https://www.hnzjgl.gov.cn">跳转</a>
    
    
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      idcard: '',
      pw: '',
    }
  },
  methods: {
    tijiao(){
      this.$router.push('/index');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  input,button{border: 0;}
  .login{
    input{width: 6.1rem;height: .8rem;border-bottom: 1px solid #c6c6c6;display: block;}
    input::-webkit-input-placeholder {font-size: .28rem;color: #c6c6c6;}
    .idcard{margin: .4rem auto 0;}
    .login-pw{margin: .4rem auto 0;}
    .btns-box{width: 6.1rem;height: .8rem;margin: .4rem auto 0;display: flex;justify-content: space-between;align-items: center;
      a{text-decoration: none;color: #ff360d; font-size: .28rem;}
    }
    .confirm{width: 3.16rem;height: 0.9rem;font-size: .32rem;line-height: .9rem;text-align: center;border-radius: .2rem;margin: 0 auto;display: block;}
  }

</style>
