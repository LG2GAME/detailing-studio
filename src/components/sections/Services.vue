<template>
  <section class="services" id="services">
    <Title>Services</Title>
    <div class="services-container">
      <Card v-for="service in services" :key="service.title">
        <img
          :src="service.img"
          :alt="service.title"
          class="card-img"
          loading="lazy"
        />
        <Title tag="h2" class="card-title">{{ service.title }}</Title>
        <p>{{ service.desc }}</p>
        <Button class="card-btn" type="decor">
          <img :src="dollarIcon" alt="" loading="lazy" />
          {{ service.price }}
        </Button>
      </Card>
    </div>
  </section>
</template>

<script setup>
import Title from '@/components/ui/Title.vue'
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'

import basicImg from '@/assets/2_basic.jpg'
import fullImg from '@/assets/3_full.jpg'
import deepImg from '@/assets/4_deep.jpg'
import dollarIcon from '@/assets/dollar.svg'

const services = [
  {
    img: basicImg,
    title: 'Basic interior',
    desc: 'Essential interior cleaning – vacuuming, surface wiping, and dust removal. Ideal for keeping your car tidy on a regular basis.',
    price: '60+'
  },
  {
    img: fullImg,
    title: 'Full Interior ',
    desc: 'Complete interior refresh including deep vacuuming, shampooing of seats and carpets, and meticulous cleaning of all surfaces for a noticeably cleaner cabin.',
    price: '100+'
  },
  {
    img: deepImg,
    title: 'Deep Clean',
    desc: 'Ultimate interior restoration. Deep steam cleaning, intensive stain extraction, full crevice cleaning, and complete odor treatment – bringing even the dirtiest interiors back to life.',
    price: '140+'
  }
]
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
