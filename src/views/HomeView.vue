<template>
  <AppNavbar />
  <main>
    <HeroSection />
    <ServicesSection />
    <GallerySection />
    <AboutUsSection />
    <BookNowSection />
  </main>
  <AppFooter />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

import AppNavbar from '@/components/layout/AppNavbar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import AboutUsSection from '@/components/sections/AboutUsSection.vue'
import BookNowSection from '@/components/sections/BookNowSection.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const GallerySection = defineAsyncComponent(
  () => import('@/components/sections/GallerySection.vue')
)
</script>
