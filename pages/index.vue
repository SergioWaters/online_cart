<template>
  <div>
    <Head> <Title>Главная | Меаком</Title></Head>
    <TheBreadcrumbs :links="links" />
    <div class="go-to-cart">
      <h1 class="title">Главная</h1>
      <div class="arrow-box">
        <span class="up arrow"></span>
      </div>
    </div>
    <button @click="getCart">get</button>
    <button @click="postCart">post</button>
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
  methods: {
    async getCart() {
      const { data } = await useAsyncData("cart", () => $fetch("api/cart"));
      console.log(data);
    },
    async postCart() {
      const { data } = await useAsyncData("cart", () =>
        $fetch("api/cart", {
          method: "post",
          body: this.$store.getters["cart/cartArr"],
        })
      );
      console.log(data);
    },
  },
  setup() {
    const { data: cart } = useAsyncData("cart", () => $fetch("api/cart"));
    return {
      cart,
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
}

@keyframes uparrow {
  0% {
    -webkit-transform: translateY(0);
    opacity: 0.4;
  }
  100% {
    -webkit-transform: translateY(-0.4em);
    opacity: 0.9;
  }
}

.go-to-cart {
  display: flex;
  position: relative;
}
.arrow-box {
  position: absolute;
  right: 50px;
  top: -250px;
  z-index: -1;
}
.arrow {
  border-color: transparent;
  border-style: solid;
  border-width: 0 2em;
  display: block;
  height: 0;
  margin: 10em auto;
  opacity: 0.4;
  text-indent: -9999px;
  transform-origin: 50% 50%;
  width: 0;
}
.up {
  animation: uparrow 0.6s infinite alternate ease-in-out;
  border-bottom: 2em solid $col-blue-1;
}
</style>
