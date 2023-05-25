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
  },
};
</script>
