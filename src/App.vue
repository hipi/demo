<template>
  <header class="header">
    <RouterLink to="/">g6</RouterLink>
    <RouterLink to="/vis">vis</RouterLink>
  </header>
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
.header {
  height: 60px;
  border-bottom: 1px solid #eee;
  a {
    margin: 0 10px;
  }
}
</style>
