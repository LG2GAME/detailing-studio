<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" class="btn"><img src="@/assets/calendar.svg" alt=""> {{label}}</a>
</template>

<script setup>
defineProps({
  label: String,
  href: String
})
</script>

<style lang="scss" scoped>
  .btn {
    align-items: center;
    border: 1px solid var(--cl-white);
    cursor: pointer;
    display: flex;
    font-size: var(--fs-small);
    font-weight: 300;
    gap: 10px;
    padding: 10px 20px;
    text-transform: uppercase;
    width: fit-content;
  }
</style>