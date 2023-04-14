// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n-edge'],
  i18n: {
    strategy: 'prefix_except_default',
    locales: [{ code: 'de', iso: 'de-DE', file: 'de.yaml', dir: 'ltr' }],
    defaultLocale: 'de',
    langDir: 'locales/',
    vueI18n: './i18n.config.js',
  },
});
