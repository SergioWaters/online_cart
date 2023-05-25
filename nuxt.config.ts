// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-swiper", "nuxt3-vuex-module"],
  css: ["@/assets/scss/style.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/_vars.scss"; @import "@/assets/scss/_normalize";@import "@/assets/scss/_fonts";@import "@/assets/scss/_colors";@import "@/assets/scss/_sku";',
        },
      },
    },
  },
});
