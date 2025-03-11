// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer: {
    port: 3001 // Nuxt のポートを 3001 に変更
  },
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:3000/api"
    }
  }
});
