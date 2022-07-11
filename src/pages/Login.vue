<template>
  <div>
    <form class="login" @submit.prevent="fetchToken">
      <h1>Sign in</h1>
      <label>User name</label>
      <input required v-model="username" type="text" placeholder="admin" />
      <label>Password</label>
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <hr />
      <button class="btn" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "login",
  data() {
    return {
      username: "admin",
      password: "admin"
    };
  },
  methods: {
    ...mapActions({
      fetchToken: 'fetchToken'
    }),
  },
};
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  margin: 0 auto;
}

input {
  background: #FFFFFF;
  border: 1px solid #DEE2F2;
  padding: 7px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

label {
  margin-bottom: 5px;
}
</style>