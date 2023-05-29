<template>
  <div>
    <Head> <Title>Заказ создан | Меаком</Title></Head>
    <div class="go-to-cart">
      <h1 class="title">Ваш заказ успешно создан!</h1>
      <h2 class="title">Номер заказа: {{ route.query.orderId }}</h2>

      <NuxtLink class="go-to-home" to="/"> На главную</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  setup() {
    const route = useRoute();

    return {
      route,
      links: [{ to: "/", title: "Главная" }],
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin: 0;
  font-size: 44px;
  line-height: 53px;
  @include font_lato_bold;
  color: $col_black_1;
  text-align: center;
}

.go-to-cart {
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.go-to-home {
  text-align: center;
}
</style>
