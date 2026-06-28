<template>
  <div v-if="!cookiesAccepted" class="cookie-banner">
    <img
      src="@/assets/cookie.svg"
      alt=""
      decoding="async"
      height="64"
      width="64"
    />
    <p>
      We use cookies to personalize your site experience and analyze the site
      traffic. By clicking "Accept All", you consent to our use of cookies.
      <br />
      Read more in our <a href="/privacy-policy">Privacy Policy</a>.
    </p>
    <Button @click="acceptCookies" class="btn-primary">Accept</Button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import Button from '@/components/ui/BaseButton.vue'

const cookiesAccepted = ref(false)

onMounted(() => {
  if (localStorage.getItem('cookies_accepted') === 'true') {
    cookiesAccepted.value = true
  }
})

const acceptCookies = () => {
  localStorage.setItem('cookies_accepted', 'true')
  cookiesAccepted.value = true
}
</script>

<style lang="scss" scoped>
.cookie-banner {
  background-color: rgba($cl-black, 0.8);
  border: 2px solid $cl-white;
  bottom: 0;
  display: flex;
  gap: 40px;
  margin: 20px;
  padding: 20px;
  place-items: center;
  position: fixed;
  right: 0;
  width: 70vw;
  z-index: 99;

  p a {
    text-decoration: underline;
    cursor: pointer !important;
  }

  @media (max-width: $bp-large) {
    width: auto;
  }
}
</style>
