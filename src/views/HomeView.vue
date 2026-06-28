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
import { useHead } from '@unhead/vue'

import AppNavbar from '@/components/layout/AppNavbar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import AboutUsSection from '@/components/sections/AboutUsSection.vue'
import BookNowSection from '@/components/sections/BookNowSection.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const GallerySection = defineAsyncComponent(
  () => import('@/components/sections/GallerySection.vue')
)

const siteUrl = import.meta.env.VITE_SITE_URL

useHead({
  title: 'Professional Car Detailing',

  link: [
    {
      rel: 'canonical',
      href: `${siteUrl}/`
    }
  ],

  meta: [
    {
      name: 'description',
      content:
        'Professional car detailing studio offering premium exterior and interior detailing, ceramic coating, paint correction, and leather conditioning. Book your appointment today.'
    },
    {
      name: 'keywords',
      content:
        'car detailing, professional detailing, ceramic coating, paint correction, interior detailing, leather conditioning, car polish, auto detailing'
    },
    {
      property: 'og:title',
      content: 'Professional Car Detailing'
    },
    {
      property: 'og:description',
      content:
        'Premium car detailing services with exceptional results. Ceramic coating, paint correction and more.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:image',
      content: 'https://yourdomain.com/src/assets/1_hero.webp' // <- change after public
    },
    {
      property: 'og:url',
      content: 'https://yourdomain.com' // <- change after public
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Professional Car Detailing'
    },
    {
      name: 'twitter:description',
      content: 'Premium car detailing services with exceptional results.'
    }
  ]
})
</script>
