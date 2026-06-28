<template>
  <section class="gallery" id="gallery">
    <BaseTitle>Gallery</BaseTitle>
    <component :is="currentComponent" />
  </section>
</template>

<script setup>
import { computed, ref, onBeforeUnmount, onMounted } from 'vue'

import BaseTitle from '@/components/ui/BaseTitle.vue'
import BeforeAfterSliderMedia from '@/components/media/BeforeAfterSliderMedia.vue'
import MobileGalleryMedia from '@/components/media/MobileGalleryMedia.vue'

const innerWidth = ref(window.innerWidth)

const handleResize = () => {
  innerWidth.value = window.innerWidth
}

const currentComponent = computed(() =>
  innerWidth.value <= 992 ? MobileGalleryMedia : BeforeAfterSliderMedia
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
  place-items: center;
  width: 100%;

  @media (min-width: $bp-large) {
    height: 100vh;
  }

  @media (max-width: $bp-medium) {
    height: 100%;
  }
}
</style>
