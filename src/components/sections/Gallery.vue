<template>
  <section class="gallery" id="gallery">
    <Title>Gallery</Title>
    <component :is="currentComponent" />
  </section>
</template>

<script setup>
import { computed, ref, onBeforeUnmount, onMounted } from 'vue'

import Title from '@/components/ui/Title.vue'
import BeforeAfterSlider from '@/components/media/BeforeAfterSlider.vue'
import MobileGallery from '@/components/media/MobileGallery.vue'

const innerWidth = ref(window.innerWidth)

const handleResize = () => {
  innerWidth.value = window.innerWidth
}

const currentComponent = computed(() =>
  innerWidth.value <= 768 ? MobileGallery : BeforeAfterSlider
)

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
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

@media (max-width: 768px) {
  .gallery {
    height: 100%;
  }
}
</style>
