<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <UIAppControlInput v-model="email" type="email">E-Mail Address</UIAppControlInput>
        <UIAppControlInput v-model="password" type="password">Password</UIAppControlInput>
        <UIAppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</UIAppButton>
        <UIAppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? 'Signup' : 'Login' }}</UIAppButton
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      this.$axios
      .$post(
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBnR8mTtCkBxZgPFXn9-szd0WBIm-vVL18',
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then(() => {})
        .catch((err) => {
          throw err
        })
    },
  },
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
