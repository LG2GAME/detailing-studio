<template>
  <section class="hero">
    <div class="hero-container">
      <h1>Detailing Studio</h1>
      <p>Precision detailing for those who appreciate excellence.
        We specialize in turning tired, neglected vehicles into
        stunning, protected machines that turn heads
        everywhere you go.</p>
      <Button type="button" href="https://bookme.now"><img src="@/assets/calendar.svg" alt=""> Get appointment</Button>
    </div>
  </section>
</template>

<script setup>
  import Button from '@/components/ui/Button.vue'
</script>

<style lang="scss" scoped>
  .hero {
    place-items: center;
    display: flex;
    min-height: 100vh;
    position: relative;

    &::after {
      background: url("@/assets/1_hero.jpg") right center / contain no-repeat;
      content: "";
      filter: blur(2.25px);
      inset: 0 0 0 auto;
      position: absolute;
      width: 100%;
      z-index: -1;
    }

    &-container {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: min(100%, 40rem);
    }
  }

  @media (max-width: 768px) {
    .hero::after {
      opacity: 0.75
    }
  }
</style>