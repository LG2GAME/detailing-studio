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
        <img src="@/assets/calendar.svg" alt="" loading="lazy" /> Get
        appointment
      </BaseButton>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<style lang="scss" scoped>
.hero {
  place-items: center;
  display: flex;
  min-height: 100vh;
  position: relative;

  &::after {
    background: url('@/assets/1_hero.webp') right center / contain no-repeat;
    content: '';
    filter: blur(2.25px);
    inset: 0 0 0 auto;
    position: absolute;
    width: 100%;
    z-index: -1;

    @media (max-width: 768px) {
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
