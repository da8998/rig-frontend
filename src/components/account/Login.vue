<template>
  <div id="account-login">
    <div id="account-login-content">
      <h5>Login with your Rig ID</h5>
      <input v-model="email" type="text" />
      <input v-model="password" type="password" />
      <a @click="login(email, password)">Sign In</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "AccountLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login(email: string, password: string) {
      axios.get("http://localhost:3000/login", {
        params: {
          credentials: true,
          username: email,
          password: password,
        },
      }).then((response) => {
          console.info(`${response}`)
      }).catch((error) => {
        console.error(`${error}`)
      });
    },
  },
});
</script>

<style scoped>
#account-login {
  position: fixed;
  left: 10%;
  width: 80%;
  right: 10%;
  height: 100%;
  background-color: black;
  border-radius: 0%;
  text-align: center;
  top: 200px;
}

#account-login-content {
  position: fixed;
  left: 10%;
  right: 10%;
  top: 200px;
  text-align: center;
}

#username {
  position: fixed;
  text-align: center;
  top: 250px;
  left: 40%;
  width: 20%;
  right: 40%;
}

#password {
  position: fixed;
  text-align: center;
  top: 300px;
  left: 40%;
  width: 20%;
  right: 40%;
}

#login {
  position: fixed;
  text-align: center;
  top: 350px;
  left: 40%;
  width: 9.75%;
  right: 50.25%;
}

#forgot-password {
  position: fixed;
  text-align: center;
  top: 350px;
  width: 9.75%;
  left: 50.25%;
  right: 40%;
}
</style>
