<script setup></script>
<template>
  <section class="privacy-policy">
    <div class="privacy-policy-section">
      <h1>Privacy Policy &mdash; Detailing Studio</h1>
      <p class="last-updated">Last updated: June 28, 2026</p>
    </div>
    <div class="privacy-policy-disclaimer">
      <p>
        <em
          ><strong>Disclaimer:</strong> This document serves exclusively as a
          placeholder and placeholder-text for a demonstration environment. It
          does not constitute a formal, binding legal contract or professional
          legal advice.</em
        >
      </p>
    </div>
    <div class="privacy-policy-section">
      <p>
        Welcome to our website. This platform is a
        <strong>demonstration project (Demo)</strong> created solely for
        showcase and presentation purposes. Your privacy is highly important to
        us, and we are committed to being fully transparent about how data is
        handled while you visit this site.
      </p>
    </div>
    <div class="privacy-policy-section">
      <h2>1. Data Collection and Processing</h2>
      <p>
        We do not directly collect, store, or process any personally
        identifiable information (PII) from our visitors. There are no contact
        forms, user accounts, or databases attached to this demonstration
        version.
      </p>
    </div>
    <div class="privacy-policy-section">
      <h2>2. Server Logs and Technical Data</h2>
      <p>
        Like most modern web applications, our automated infrastructure and
        third-party hosting providers (such as the platform hosting this
        deployment) may automatically log standard technical data. This
        information typically includes:
      </p>
      <ul>
        <li>Anonymized IP addresses</li>
        <li>Browser type and version</li>
        <li>Operating system details</li>
        <li>Date, time, and duration of your visit</li>
        <li>Pages viewed and referral URLs</li>
      </ul>
      <p>
        This data is processed automatically and strictly used for monitoring
        infrastructure performance, ensuring system security, and preventing
        malicious activity. It is never used to identify individual users or for
        commercial profiling.
      </p>
    </div>
    <div class="privacy-policy-section">
      <h2>3. Cookie Usage</h2>
      <p>
        This website utilizes only <strong>essential cookies</strong>. These are
        technical, non-tracking cookies strictly necessary for the application
        to function correctly, handle basic navigation state, and remember your
        interface preferences (such as cookie consent acknowledgment).
      </p>
      <p>
        We do not deploy any third-party marketing, advertising, or behavioral
        tracking cookies on this demo platform.
      </p>
    </div>
    <div class="privacy-policy-section">
      <h2>4. Third-Party Services</h2>
      <p>
        To deliver a modern user experience, this site integrates minimal
        external assets, including Google Fonts. These external assets are
        fetched directly from third-party servers, which may process your
        request according to their respective privacy standards. We highly
        recommend reviewing their privacy documentation if you have any
        compliance concerns.
      </p>
    </div>
    <div class="privacy-policy-section">
      <h2>5. Your Rights & Data Management</h2>
      <p>
        Because this application does not gather, maintain, or manage any
        user-specific personal records, there is no physical data archive to
        access, rectify, restrict, or delete under standard data protection
        regulations (such as GDPR).
      </p>
    </div>
    <div class="privacy-policy-section">
      <h2>6. Contact Information</h2>
      <p>
        If you have any questions regarding this technical demonstration or its
        privacy practices, please feel free to reach out to the developer:
      </p>
      <p><strong>Arkadiusz Gorszczyk</strong></p>
      <ul>
        <li>
          Email: <a href="mailto:lg2game6@gmail.com">lg2game6@gmail.com</a>
        </li>
        <li>Github: <a href="https://github.com/LG2GAME">LG2GAME</a></li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.privacy-policy {
  position: relative;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 70%;

  &::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 100%;
    top: 0;
    left: 20px;
    background-color: $cl-white;
  }

  @media (max-width: $bp-large) {
    width: 100%;
  }

  &-section {
    h1,
    h2 {
      text-shadow: none;
    }

    ul {
      padding-left: 40px;
    }

    a {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  &-disclaimer {
    text-decoration: underline;
  }
}
</style>
