// nuxt.config.ts
// Nuxt 3 + @nuxt/content
// npx nuxi init . && npm i, then run `npm run dev`
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    highlight: { theme: 'github-dark' }
  },
  nitro: {
    preset: 'netlify'
  },
  app: {
    head: {
      title: 'Catálogo de Laptops',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  }
})
