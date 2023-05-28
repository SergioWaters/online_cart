<template>
  <div>
    <TheBreadcrumbs :links="links" />
    <div class="go-to-cart">
      <h1 class="title">Главная</h1>
      <div class="arrow-box">
        <span class="up arrow"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  mounted() {
    this.$store.dispatch("cart/init");
    this.$store.dispatch("featured/init");
  },
  data() {
    return {
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
@keyframes downarrow {
  0% {
    -webkit-transform: translateY(0);
    opacity: 0.4;
  }
  100% {
    -webkit-transform: translateY(0.4em);
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
  border-bottom: 2em solid #00b6f1;
}
.down {
  animation: downarrow 0.6s infinite alternate ease-in-out;
  border-top: 2em solid #00b6f1;
}
</style>
