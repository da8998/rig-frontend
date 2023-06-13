<template>
    <div className="w-screen h-screen dark:bg-slate-950 ">
    <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/6 bg-white rounded-lg shadow-2xl sm:p-6 md:p-8 dark:bg-black dark:border-slate-900">
    <form className="space-y-6">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Rig ID</h5>
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="user@example.com" required>
        </div>
        <div>
            <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="user3003" required>
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already registered? <a @click="$router.push(`/login`)" className="text-blue-700 hover:underline dark:text-blue-500">Login to my account</a>
        </div>
    </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AccountLogin",
    
});
</script>
