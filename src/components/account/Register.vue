<template>
    <div id="account-register">
        <div id="account-register-content">
            <h5>Register</h5>
                
         
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AccountLogin",
    
});
</script>

<style scoped>
#account-register-heading {
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

#email {
    position: fixed;
    text-align: center;
    top: 250px;
    left: 40%;
    width: 20%;
    right: 40%;
}

#username {
    position: fixed;
    text-align: center;
    top: 300px;
    left: 40%;
    width: 20%;
    right: 40%;
}

#password {
    position: fixed;
    text-align: center;
    top: 350px;
    left: 40%;
    width: 20%;
    right: 40%;
}

#login {
    position: fixed;
    text-align: center;
    top: 400px;
    left: 40%;
    width: 20%;
    right: 40%;
    margin: 1px;
}
</style>
