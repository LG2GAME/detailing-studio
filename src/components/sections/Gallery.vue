<template>
  <section class="gallery">
    <Title>Gallery</Title>
    <div class="gallery-container">a</div>
  </section>
</template>

<script setup>
  import Title from "@/components/ui/Title.vue";
</script>

<style lang="scss" scoped>
  .gallery {
    width: 100%;
    min-height: 100vh;
    gap: 40px;
    display: flex;
    place-items: center;
    flex-direction: column;
    
    &-container {
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
  }
</style>