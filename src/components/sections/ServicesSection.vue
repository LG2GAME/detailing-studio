<template>
  <section class="services" id="services">
    <BaseTitle>Services</BaseTitle>
    <div class="services-container">
      <BaseCard v-for="service in services" :key="service.title">
        <img
          :src="service.img"
          :alt="service.alt"
          class="card-img"
          loading="lazy"
          decoding="async"
          width="427"
          height="375"
        />
        <BaseTitle tag="h2" class="card-title">{{ service.title }}</BaseTitle>
        <p>{{ service.desc }}</p>
        <BaseButton class="card-btn" type="decor">
          <img :src="dollarIcon" alt="" loading="lazy" decoding="async" />
          {{ service.price }}
        </BaseButton>
      </BaseCard>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseTitle from '@/components/ui/BaseTitle.vue'
import dollarIcon from '@/assets/dollar.svg'
import { services } from '@/data/services.js'
</script>

<style lang="scss" scoped>
.services {
  display: flex;
  flex-direction: column;
  gap: 40px;
  place-items: center;

  &-container {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

    .card {
      img {
        width: 100%;
        height: auto;
      }

      &-title {
        text-align: center;
      }

      &-btn {
        margin-left: auto;
        margin-top: auto;
      }
    }
  }
}
</style>
