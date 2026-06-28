const siteUrl = import.meta.env.VITE_SITE_URL || 'https://yourdomain.com'

export const seoConfig = {
  title: 'Professional Car Detailing',
  titleTemplate: '%s | Premier Chicago Detailing',
  htmlAttrs: { lang: 'en-US' },
  link: [
    { rel: 'canonical', href: `${siteUrl}/` },
    { rel: 'icon', href: '/favicon.ico', sizes: 'any' }
  ],
  meta: [
    {
      name: 'description',
      content:
        'Professional car detailing studio offering premium exterior and interior detailing, ceramic coating, paint correction, and leather conditioning. Book your appointment today.'
    },

    { property: 'og:title', content: 'Professional Car Detailing' },
    {
      property: 'og:description',
      content: 'Premium car detailing services with exceptional results.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: siteUrl },
    { property: 'og:image', content: `${siteUrl}/og-image.jpg` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:locale', content: 'en_US' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Professional Car Detailing' },
    {
      name: 'twitter:description',
      content: 'Premium car detailing services with exceptional results.'
    },
    { name: 'twitter:image', content: `${siteUrl}/og-image.jpg` }
  ]
}
