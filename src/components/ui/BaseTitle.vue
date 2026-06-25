<template>
  <component :is="tag" :class="{ title: tag === 'h1' }">
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: 'h1'
  }
})
</script>

<style lang="scss" scoped>
.title {
  border-bottom: 4px solid $cl-graphite;
  padding: 10px;
  display: inline-block;
}
</style>
