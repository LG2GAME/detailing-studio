<template>
  <nav class="navbar">
    <h2 class="logo">Pawel Wnek</h2>
    <button
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
      role="menubar"
      :aria-hidden="!isOpen"
    >
      <li @click="isOpen = false">
        <a href="#services" role="menuitem">Services</a>
      </li>
      <li @click="isOpen = false">
        <a href="#gallery" role="menuitem">Gallery</a>
      </li>
      <li @click="isOpen = false">
        <a href="#about-us" role="menuitem">About us</a>
      </li>
      <li @click="isOpen = false">
        <a href="#book-now" role="menuitem">Book now</a>
      </li>
      <li @click="isOpen = false">
        <a href="#contact" role="menuitem">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'

const isOpen = ref(false)

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
  background-color: var(--cl-black);
  border-bottom: 1px solid var(--cl-dim-grey);
  display: flex;
  font-family: var(--ff-lato), sans-serif;
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
    cursor: pointer;
    display: none;
    flex-direction: column;
    gap: 8px;
    width: 45px;
    z-index: 99;

    @media (max-width: var(--bp-large)) {
      display: flex;
    }

    span {
      background-color: var(--cl-white);
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

    @media (max-width: var(--bp-large)) {
      align-items: center;
      background-color: var(--cl-black);
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
      font-size: var(--fs-small);
      text-transform: uppercase;
      cursor: pointer;

      @media (max-width: var(--bp-large)) {
        font-size: var(--fs-medium);
        font-weight: 700;
      }
    }
  }
}
</style>
