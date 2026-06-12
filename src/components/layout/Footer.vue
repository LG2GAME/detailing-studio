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
              ><img src="@/assets/whatsapp.svg" alt="Whatsapp"
            /></a>
          </li>
          <li>
            <a href="https://instagram.com/" target="_blank"
              ><img src="@/assets/instagram.svg" alt="Instagram"
            /></a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank"
              ><img src="@/assets/facebook.svg" alt="Facebook"
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
  width: 100%;
  padding: 25px 40px;
  position: relative;
  margin-top: 40px;

  section {
    padding: 0;
  }

  &::after {
    background: url('@/assets/1_hero.jpg') right center / 35% no-repeat;
    content: '';
    filter: blur(3px);
    inset: 0;
    position: absolute;
    z-index: -1;
  }

  &-info {
    display: flex;
    width: 70%;
    gap: 40px;

    &-hero {
      width: 70%;
    }

    &-address {
      list-style-type: none;
      width: 30%;
    }

    &-social {
      display: flex;
      list-style-type: none;
      justify-content: space-between;
      margin-top: 8px;

      a {
        cursor: pointer;
      }
    }
  }

  &-copyrights {
    display: flex;
    justify-content: space-between;

    p {
      color: var(--cl-graphite);
    }

    span {
      color: var(--cl-white);
      font-weight: 700;
    }
  }
}

@media (max-width: 992px) {
  .footer {
    &::after {
      background-size: contain;
    }

    &-info {
      flex-direction: column;
      width: 100%;
    }
  }
}
@media (max-width: 768px) {
  .footer {
    &::after {
      background: none;
    }

    &-info {
      &-hero,
      &-address {
        width: 100%;
      }

      &-social {
        gap: 40px;
        justify-content: left;
      }
    }

    &-copyrights {
      flex-direction: column;
      margin-top: 20px;
    }
  }
}
</style>
