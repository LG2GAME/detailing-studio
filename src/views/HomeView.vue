<template>
  <Navbar />
  <main>
    <Hero />
    <Services />
    <Gallery />
  </main>
</template>

<script setup>
  import Navbar from "@/components/layout/Navbar.vue";
  import Hero from "@/components/sections/Hero.vue";
  import Services from "@/components/sections/Services.vue";
  import Gallery from "@/components/sections/Gallery.vue";
</script>