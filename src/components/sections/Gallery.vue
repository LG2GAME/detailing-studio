<template>
  <section class="gallery">
    <Title>Gallery</Title>
    <BeforeAfterSlider />
  </section>
</template>

<script setup>
  import Title from "@/components/ui/Title.vue";
  import BeforeAfterSlider from "@/components/media/BeforeAfterSlider.vue";
</script>

<style lang="scss" scoped>
  .gallery {
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 100vh;
    place-items: center;
    width: 100%;
  }

</style>