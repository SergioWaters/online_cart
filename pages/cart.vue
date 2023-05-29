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
