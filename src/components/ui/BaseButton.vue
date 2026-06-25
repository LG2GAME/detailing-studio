<template>
  <a
    v-if="type === 'button'"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="btn"
  >
    <slot />
  </a>

  <div v-else-if="type === 'decor'" class="btn btn-decor">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  href: String,
  type: {
    type: String,
    default: 'button'
  }
})
</script>

<style lang="scss" scoped>
.btn {
  align-items: center;
  border: 1px solid $cl-white;
  cursor: pointer;
  display: flex;
  font-size: $fs-small;
  font-weight: 300;
  gap: 10px;
  padding: 10px 20px;
  text-transform: uppercase;
  width: fit-content;

  &-decor {
    cursor: default;
    font-size: $fs-medium;
    font-weight: 600;
  }
}
</style>
