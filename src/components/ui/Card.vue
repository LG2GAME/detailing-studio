<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 25px;
  height: 100%;
}
</style>
