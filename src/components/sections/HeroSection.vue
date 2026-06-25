<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Detailing Studio</h1>
      <p>
        Precision detailing for those who appreciate excellence. We specialize
        in turning tired, neglected vehicles into stunning, protected machines
        that turn heads everywhere you go.
      </p>
      <BaseButton type="button" href="https://bookme.now">
        <img src="@/assets/calendar.svg" alt="" decoding="async" /> Get
        appointment
      </BaseButton>
    </div>
    <img
      src="@/assets/1_hero.webp"
      alt=""
      class="hero-background"
      decoding="async"
      fetchpriority="high"
      width="2732"
      height="4096"
    />
  </section>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  min-height: 100vh;
  place-items: center;
  position: relative;

  &-background {
    filter: blur(1.5px);
    height: 100%;
    inset: 0 0 0 auto;
    max-width: 100%;
    object-fit: contain;
    position: absolute;
    width: auto;
    z-index: -1;

    @media (max-width: var(--bp-medium)) {
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
