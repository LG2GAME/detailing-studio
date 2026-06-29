<template>
  <nav id="main-navigation" class="navbar">
    <h2 class="logo">Detailing Studio</h2>
    <button
      v-if="isMobile"
      class="burger"
      @click="toggleMenu"
      aria-label="Toggle navigation menu"
      :aria-expanded="isOpen"
      aria-controls="main-navigation"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul
      id="main-navigation"
      :class="{ active: isOpen }"
      :aria-hidden="isMobile ? !isOpen : false"
    >
      <li @click="isOpen = false">
        <a href="#services" :tabindex="isMobile && !isOpen ? '-1' : '0'"
          >Services</a
        >
      </li>
      <li @click="isOpen = false">
        <a href="#gallery" :tabindex="isMobile && !isOpen ? '-1' : '0'"
          >Gallery</a
        >
      </li>
      <li @click="isOpen = false">
        <a href="#about-us" :tabindex="isMobile && !isOpen ? '-1' : '0'"
          >About us</a
        >
      </li>
      <li @click="isOpen = false">
        <a href="#book-now" :tabindex="isMobile && !isOpen ? '-1' : '0'"
          >Book now</a
        >
      </li>
      <li @click="isOpen = false">
        <a href="#contact" :tabindex="isMobile && !isOpen ? '-1' : '0'"
          >Contact</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'
import { useMediaQuery } from '@vueuse/core'

const isOpen = ref(false)
const isMobile = useMediaQuery('(max-width: 992px)')

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

watch(isOpen, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<style lang="scss" scoped>
.navbar {
  align-items: center;
  background-color: $cl-black;
  border-bottom: 1px solid $cl-dim-grey;
  display: flex;
  font-family: $ff-lato, sans-serif;
  justify-content: space-between;
  left: 0;
  padding: 25px 40px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 99;

  .logo {
    z-index: 99;
  }

  .burger {
    all: unset;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 45px;
    z-index: 99;

    span {
      background-color: $cl-white;
      border-radius: 99px;
      height: 5px;
      width: 100%;
    }
  }

  ul {
    align-items: center;
    display: flex;
    gap: 25px;
    list-style-type: none;

    @media (max-width: $bp-large) {
      align-items: center;
      background-color: $cl-black;
      flex-direction: column;
      height: 100vh;
      justify-content: center;
      left: 0;
      position: absolute;
      top: 0;
      transform: translateX(-105%);
      transition: transform 0.3s ease-in-out;
      width: 100%;

      &.active {
        transform: translateX(0);
      }
    }

    li {
      font-size: $fs-small;
      text-transform: uppercase;
      cursor: pointer;

      @media (max-width: $bp-large) {
        font-size: $fs-medium;
        font-weight: 700;
      }

      a {
        transition: color 0.3s ease-out;

        &:hover {
          color: $cl-graphite;
        }
      }
    }
  }
}
</style>
