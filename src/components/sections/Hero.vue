<template>
  <section class="hero">
    <div class="container">
      <h1>Detailing Studio</h1>
      <p>Precision detailing for those who appreciate excellence.
        We specialize in turning tired, neglected vehicles into
        stunning, protected machines that turn heads
        everywhere you go.</p>
      <Button href="https://bookme.now" label="Get appointment" />
    </div>
    <div class="background-image"></div>
  </section>
</template>

<script setup>
  import Button from '@/components/ui/Button.vue'
</script>

<style lang="scss" scoped>
  .hero {
    align-items: center;
    display: flex;
    min-height: 100vh;
    position: relative;

    .container {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 40%;
    }

    .background-image {
      background-image: url("@/assets/1_hero.jpg");
      background-position: right;
      background-repeat: no-repeat;
      background-size: contain;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      z-index: -1;

      &::before{
        -webkit-backdrop-filter: blur(3.2px);
        backdrop-filter: blur(3.5px);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        content: "";
        height: 100%;
        position: absolute;
        width: 100%;
      }
    }
  }

  @media (max-width: 992px) {
    .hero {
      .container {
        width: 60%;
      }

      .background-image {
        width: 40%;
      }
    }
  }

  @media (max-width: 768px) {
    .hero {
      .container {
        width: 70%;
      }

      .background-image {
        width: 40%;
      }
    }
  }

  @media (max-width: 576px) {
    .hero {
      .container {
        width: 100%;
        align-items: center;
      }

      .background-image {
        width: 100%;
        opacity: 0.5;
      }
    }
  }
</style>