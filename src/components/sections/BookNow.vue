<template>
  <section class="book-now" id="book-now">
    <Title>Book Now</Title>
    <div class="book-now-content">
      <h1>Transform your vehicle with expert detailing services.</h1>
      <Button type="button" href="https://bookme.now"><img src="@/assets/calendar.svg" alt=""> Book a visit today</Button>
    </div>
  </section>
</template>

<script setup>
import Title from "@/components/ui/Title.vue";
import Button from "@/components/ui/Button.vue";
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
      background: url("@/assets/8_book.jpg") center / cover no-repeat;
      content: "";
      filter: blur(4px);
      inset: 0;
      opacity: 0.75;
      position: absolute;
      z-index: -1;
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
    }
  }

  @media (max-width: 768px) {
    .book-now-content {
      width: 80%;
    }
  }

  @media (max-width: 576px) {
    .book-now {
      &::after {
        background-position: left center;
      }

      &-content {
        width: 100%;
      }
    }
  }
</style>