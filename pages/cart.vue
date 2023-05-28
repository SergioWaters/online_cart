<template>
  <div>
    <TheBreadcrumbs :links="links" />
    <TheCart />
    <TheSlider />
  </div>
</template>
<script>
export default {
  layout: "default",
  mounted() {
    this.$store.dispatch("cart/init");
  },
  data() {
    return {
      links: [
        { to: "/", title: "Главная" },
        { to: "/cart", title: "Корзина" },
      ],
    };
  },
};
</script>
