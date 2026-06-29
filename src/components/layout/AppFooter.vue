<template>
  <footer class="footer">
    <section class="footer-info">
      <div class="footer-info-hero">
        <h2>Detailing Studio</h2>
        <p>
          Precision detailing that restores and protects your vehicle to a high
          standard. We transform neglected cars into clean, refined machines
          that stand out on the road.
        </p>
      </div>
      <ul class="footer-info-address">
        <li>232 Western Avenue</li>
        <li>Chicago, IL 60642</li>
        <li><a href="tel:+17735281947">(773) 528-1947</a></li>
        <li class="footer-info-social">
          <a href="https://www.whatsapp.com/" target="_blank"
            ><img
              src="@/assets/whatsapp.svg"
              alt="Whatsapp"
              loading="lazy"
              decoding="async"
          /></a>
          <a href="https://instagram.com/" target="_blank"
            ><img
              src="@/assets/instagram.svg"
              alt="Instagram"
              loading="lazy"
              decoding="async"
          /></a>
          <a href="https://www.facebook.com/" target="_blank"
            ><img
              src="@/assets/facebook.svg"
              alt="Facebook"
              loading="lazy"
              decoding="async"
          /></a>
        </li>
      </ul>
      <div class="footer-info-police">
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </section>
    <section class="footer-copyrights">
      <p>Copyright &#169; 2026 <span>Arkadiusz Gorszczyk</span></p>
      <p>Developed by <span>AstroCode</span></p>
    </section>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 25px 40px;
  position: relative;
  width: 100%;

  section {
    padding: 0;
  }

  &-info {
    display: flex;
    width: 100%;
    gap: 40px;

    @media (max-width: $bp-large) {
      flex-direction: column;
      width: 100%;
    }

    &-hero {
      width: 70%;

      @media (max-width: $bp-medium) {
        width: 100%;
      }
    }

    &-address {
      list-style-type: none;
      width: 30%;

      @media (max-width: $bp-large) {
        width: 100%;
      }
    }

    &-social {
      display: flex;
      gap: 40px;
      list-style-type: none;
      margin-top: 8px;

      a {
        cursor: pointer;
      }
    }

    &-police {
      width: 30%;

      a {
        cursor: pointer;
        text-decoration: underline;
        transition: color 0.3s ease-out;

        &:hover {
          color: $cl-graphite;
        }
      }

      @media (max-width: $bp-large) {
        width: 100%;
      }
    }
  }

  &-copyrights {
    display: flex;
    justify-content: space-between;

    @media (max-width: $bp-large) {
      flex-direction: column;
      margin-top: 20px;
    }

    p {
      color: $cl-graphite;
    }

    span {
      color: $cl-white;
      font-weight: 700;
    }
  }
}
</style>
