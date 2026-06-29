<template>
  <div class="not-found">
    <h1><i>404</i></h1>
    <p>Page not found</p>
    <Button type="4o4"
      ><router-link to="/">Back to homepage</router-link></Button
    >
  </div>
</template>

<script setup>
import Button from '@/components/ui/BaseButton.vue'
</script>

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
