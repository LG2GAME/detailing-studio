<template>
  <Analytics />
  <CookieBanner />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
import { seoConfig } from '@/seo/meta'
import { studioSchema } from '@/seo/schema'
import CookieBanner from '@/components/ui/BaseUserConsent.vue'

import { Analytics } from '@vercel/analytics/vue'

useHead({
  ...seoConfig,
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(studioSchema)
    }
  ]
})
</script>
