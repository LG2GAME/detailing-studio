<template>
  <div class="not-found">
    <h1><i>404</i></h1>
    <p>Page not found</p>
    <router-link to="/">Back to homepage</router-link>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  width: 100%;
  height: 100vh;
}
</style>
