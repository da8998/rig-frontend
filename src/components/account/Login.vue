<template>
  <div className="w-screen h-screen dark:bg-slate-950">
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/6 bg-white rounded-lg shadow-2xl sm:p-6 md:p-8 dark:bg-black dark:border-slate-900"
    >
      <form className="space-y-6">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Rig ID
        </h5>
        <div>
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Email or Username</label
          >
          <input
            type="email"
            v-model="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="user@example.com"
            required
          />
        </div>
        <div>
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Password</label
          >
          <input
            type="password"
            v-model="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Remember me</label
            >
          </div>
          <a
            href="#"
            className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >Forgot Password?</a
          >
        </div>
        <button
          @click="login(email, password)"
          type="button"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?
          <a
            @click="$router.push(`/register`)"
            className="text-blue-700 hover:underline dark:text-blue-500"
            >Create account</a
          >
        </div>
      </form>
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
    async login(email: string, password: string) {
      axios.get(`http://localhost:3000/login`, { params : {
        credentials: "include",
        username: email,
        password: password,
      }}).then((res) => {
        console.log(res);
      });
    },
  },
});
</script>
