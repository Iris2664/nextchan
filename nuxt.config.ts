// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-mongoose"],
  css: ['@/assets/css/main.css'],
  mongoose: {
    uri: process.env.NUXT_MOGODB_URI,
    modelsDir: "models",
    devtools: true,
  },
  runtimeConfig: {
    mongoose: {
      uri: process.env.NUXT_MOGODB_URI,
    },
  },
});