<template>
  <div>
    <TheHeader />
    <TheMain />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("cart/init");
    this.$store.dispatch("featured/init");
  },
};
</script>
