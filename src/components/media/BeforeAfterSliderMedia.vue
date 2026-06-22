<template>
  <div class="gallery-container" ref="container" @mousedown="start">
    <img
      class="gallery-after"
      src="@/assets/6_gallery.webp"
      alt="Gallery after image"
      loading="lazy"
      decoding="async"
    />
    <div class="gallery-before-wrapper" :style="{ width: position + '%' }">
      <img
        class="gallery-before"
        src="@/assets/5_gallery.webp"
        alt="Gallery before image"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="gallery-handle" :style="{ left: position + '%' }"></div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const position = ref(50)
const container = ref(null)
container.value = undefined

const isDragging = ref(false)
const isSnapping = ref(false)

const updatePosition = (clientX) => {
  const rect = container.value.getBoundingClientRect()
  const x = clientX - rect.left
  const percentage = (x / rect.width) * 100

  position.value = Math.max(0, Math.min(100, percentage))
}

const start = (position) => {
  if (isSnapping.value) return

  isDragging.value = true
  updatePosition(position.clientX)
}

const move = (position) => {
  if (!isDragging.value || isSnapping.value) return
  updatePosition(position.clientX)
}

const stop = () => {
  isDragging.value = false
}

onMounted(() => {
  window.addEventListener('mousemove', move)
  window.addEventListener('mouseup', stop)
})
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', move)
  window.removeEventListener('mouseup', stop)
})
</script>

<style lang="scss" scoped>
.gallery {
  &-container {
    aspect-ratio: 16/9;
    height: 100%;
    position: relative;
    user-select: none;
  }

  &-before,
  &-after {
    height: 100%;
    inset: 0;
    object-fit: cover;
    position: absolute;
  }

  &-before-wrapper {
    inset: 0;
    overflow: hidden;
    position: absolute;
    width: 50%;
  }

  &-handle {
    background: var(--cl-white);
    cursor: ew-resize;
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 4px;

    &::after {
      background-color: #fff;
      border-radius: 99px;
      content: '';
      height: 25px;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 25px;
    }
  }
}
</style>
