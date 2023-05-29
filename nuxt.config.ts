// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-swiper", "nuxt3-vuex-module"],
  swiper: {
    prefix: "Swiper",
    // modules: ["navigation"], // all modules are imported by default
  },
  css: ["@/assets/scss/style.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/_normalize";
            @import "@/assets/scss/_vars"; 
            @import "@/assets/scss/_colors";
            @import "@/assets/scss/_fonts";
            `,
        },
      },
    },
  },
});
