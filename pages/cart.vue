<template>
  <div>
    <Head> <Title>Ваша корзина | Меаком</Title></Head>
    <TheBreadcrumbs :links="links" />
    <TheCart />
    <TheSlider />
  </div>
</template>
<script>
export default {
  layout: "default",
  mounted() {
    if (!this.$store.getters["cart/cartArr"].length)
      this.$store.dispatch("cart/init");
    if (!this.$store.getters["featured/featuredArr"].length)
      this.$store.dispatch("featured/init");
  },
  setup() {
    return {
      links: [
        { to: "/", title: "Главная" },
        { to: "/cart", title: "Корзина" },
      ],
    };
  },
};
</script>
