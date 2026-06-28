<template>
  <div class="gallery-container">
    <div class="gallery-before">
      <img
        src="@/assets/5_gallery.webp"
        alt="Car before professional detailing service"
        loading="lazy"
        decoding="async"
        width="1245"
        height="768"
      />
      <h2>Before</h2>
    </div>
    <div class="gallery-after">
      <img
        src="@/assets/6_gallery.webp"
        alt="Car after professional detailing and ceramic coating"
        loading="lazy"
        decoding="async"
        width="1245"
        height="768"
      />
      <h2>After</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  &-container {
    aspect-ratio: 16/9;
    width: 100%;
    gap: 20px;
    display: flex;
    flex-direction: column;
  }

  &-before,
  &-after {
    width: 100%;
    position: relative;

    img {
      width: 100%;
      height: auto;
    }

    h2 {
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 0 0 20px 20px;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);

      @media (max-width: $bp-small) {
        font-size: $fs-small;
        margin: 0 0 10px 10px;
      }
    }
  }
}
</style>
