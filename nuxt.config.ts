
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/image'
  ],
  runtimeConfig: {
public: {
apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://api.escuelajs.co/api/v1'
}
}
})