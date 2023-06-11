<template>
  <h3>Welcome {{ email }}!</h3>
  <p>Authentication State: {{ authState }}</p>
  <a href="http://localhost:3000/logout">Logout</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  props: ["email", "authState"],
});
</script>
