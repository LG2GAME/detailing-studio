<template>
  <section class="about-us" id="about-us">
    <BaseTitle>About us</BaseTitle>
    <div class="about-us-container">
      <div class="about-us-content">
        <h1>
          Precision Detailing. <br />
          Real Results.
        </h1>
        <div class="about-us-content-desc">
          <p>
            Detailing is more than just cleaning — it’s about bringing a vehicle
            back to its best possible condition. We focus on precision work,
            enhancing every surface to achieve a deep, mirror-like finish and
            long-lasting protection.
          </p>
          <p>
            We don’t rush projects. Each car gets the time, process, and care it
            deserves, ensuring results that stand out both in sunlight and up
            close.
          </p>
        </div>
      </div>
      <div class="about-us-media">
        <video autoPlay loop muted playsInline>
          <source src="@/assets/7_team.mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseTitle from '@/components/ui/BaseTitle.vue'
</script>

<style lang="scss" scoped>
.about-us {
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 40px;

  &-container {
    width: 100%;
    display: flex;
    place-items: center;
    gap: 40px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &-content {
    width: 50%;
    gap: 40px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 100%;
    }

    &-desc {
      display: flex;
      flex-direction: column;
      gap: 20px;

      p {
        font-weight: 400;
      }
    }
  }

  &-media {
    width: 50%;
    display: inline-flex;
    place-content: center;

    @media (max-width: 768px) {
      width: 100%;
    }

    video {
      width: 60%;
      height: auto;

      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
}
</style>
