function addSpace(num: number) {
  if (!num) return;
  const str = String(num);
  return `${str.slice(0, -3)} ${str.slice(-3)}`;
}

export default defineNuxtPlugin(async (nuxt) => {
  nuxt.addSpace = addSpace;
});
