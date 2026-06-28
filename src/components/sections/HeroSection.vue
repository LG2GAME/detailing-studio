<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Detailing Studio</h1>
      <p>
        Precision detailing for those who appreciate excellence. We specialize
        in turning tired, neglected vehicles into stunning, protected machines
        that turn heads everywhere you go.
      </p>
      <BaseButton type="button" :href="bookingUrl">
        <img src="@/assets/calendar.svg" alt="" decoding="async" /> Get
        appointment
      </BaseButton>
    </div>
    <img
      src="@/assets/1_hero.webp"
      alt="Professional car detailing studio with luxury vehicles in premium workshop"
      class="hero-background"
      loading="eager"
      decoding="async"
      fetchpriority="high"
      width="627"
      height="940"
    />
  </section>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import heroImageUrl from '@/assets/1_hero.webp'

const bookingUrl = import.meta.env.VITE_BOOKING_URL

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: heroImageUrl,
      type: 'image/webp',
      fetchpriority: 'high'
    }
  ]
})
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  min-height: 100vh;
  place-items: center;
  position: relative;

  &-background {
    height: 100%;
    inset: 0 0 0 auto;
    max-width: 100%;
    object-fit: contain;
    position: absolute;
    width: auto;
    z-index: -1;

    @media (max-width: $bp-medium) {
      opacity: 0.75;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: min(100%, 40rem);
  }
}
</style>
