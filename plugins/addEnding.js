function getEnding(num) {
  if (num === 1) return "товар";
  if ((num > 1) & (num < 5)) return "товара";
  return "товаров";
}

export default defineNuxtPlugin(async (nuxt) => {
  nuxt.addEnding = getEnding;
});
