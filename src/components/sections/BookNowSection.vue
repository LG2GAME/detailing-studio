<template>
  <section class="book-now" id="book-now">
    <BaseTitle>Book Now</BaseTitle>
    <div class="book-now-content">
      <h1>Transform your vehicle with expert detailing services.</h1>
      <BaseButton type="button" href="https://bookme.now"
        ><img
          src="@/assets/calendar.svg"
          alt=""
          loading="lazy"
          decoding="async"
        />
        Book a visit today</BaseButton
      >
    </div>
  </section>
</template>

<script setup>
import BaseTitle from '@/components/ui/BaseTitle.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<style lang="scss" scoped>
.book-now {
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-height: 100vh;
  place-items: center;
  position: relative;

  &::after {
    background: url('@/assets/8_book.webp') center / cover no-repeat;
    content: '';
    filter: blur(4px);
    inset: 0;
    opacity: 0.75;
    position: absolute;
    z-index: -1;

    @media (max-width: 576px) {
      background-position: left center;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 40px;
    justify-content: center;
    place-items: center;
    text-align: center;
    width: 50%;

    @media (max-width: 768px) {
      width: 80%;
    }

    @media (max-width: 576px) {
      width: 100%;
    }
  }
}
</style>
