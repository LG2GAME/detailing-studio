<template>
  <Navbar />
  <main>
    <Hero />
    <Services />
    <Gallery />
    <AboutUs />
    <BookNow />
  </main>
  <Footer />
</template>

<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import Hero from '@/components/sections/Hero.vue'
import Services from '@/components/sections/Services.vue'
import Gallery from '@/components/sections/Gallery.vue'
import AboutUs from '@/components/sections/AboutUs.vue'
import BookNow from '@/components/sections/BookNow.vue'
import Footer from '@/components/layout/Footer.vue'
</script>
