<template>
  <a
    v-if="type === 'button'"
    :href="href"
    :target="condition ? condition : '_self'"
    rel="noopener noreferrer"
    class="btn"
  >
    <slot />
  </a>

  <div v-else-if="type === 'decor'" class="btn btn-decor">
    <slot />
  </div>

  <a
    v-else-if="type === '4o4'"
    target="_blank"
    rel="noopener noreferrer"
    class="btn"
  >
    <slot />
  </a>
</template>

<script setup>
defineProps({
  href: String,
  type: {
    type: String,
    default: 'button'
  },
  condition: String
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
  transition:
    color 0.3s ease-out,
    border-color 0.3s ease-out;

  &:hover {
    color: $cl-graphite;
    border-color: $cl-graphite;
  }

  &-decor {
    cursor: default;
    font-size: $fs-medium;
    font-weight: 600;

    &:hover {
      color: $cl-white;
      border-color: $cl-white;
    }
  }
}
</style>
