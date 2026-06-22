<template>
  <footer class="footer">
    <section class="footer-info">
      <div class="footer-info-hero">
        <h2>Pawel Wnek</h2>
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
        <ul class="footer-info-social">
          <li>
            <a href="https://www.whatsapp.com/" target="_blank"
              ><img
                src="@/assets/whatsapp.svg"
                alt="Whatsapp"
                loading="lazy"
                decoding="async"
            /></a>
          </li>
          <li>
            <a href="https://instagram.com/" target="_blank"
              ><img
                src="@/assets/instagram.svg"
                alt="Instagram"
                loading="lazy"
                decoding="async"
            /></a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank"
              ><img
                src="@/assets/facebook.svg"
                alt="Facebook"
                loading="lazy"
                decoding="async"
            /></a>
          </li>
        </ul>
      </ul>
    </section>
    <section class="footer-copyrights">
      <p>Copyright &#169; 2026 <span>Pawel Wnek</span></p>
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
    width: 70%;
    gap: 40px;

    @media (max-width: 992px) {
      flex-direction: column;
      width: 100%;
    }

    &-hero {
      width: 70%;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    &-address {
      list-style-type: none;
      width: 30%;

      @media (max-width: 768px) {
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
  }

  &-copyrights {
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      margin-top: 20px;
    }

    p {
      color: var(--cl-graphite);
    }

    span {
      color: var(--cl-white);
      font-weight: 700;
    }
  }
}
</style>
