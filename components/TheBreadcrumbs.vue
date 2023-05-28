<template>
  <div class="breadcrumbs">
    <NuxtLink
      class="breadcrumbs__item"
      v-for="{ to, title } in links"
      :to="to"
      >{{ title }}</NuxtLink
    >
  </div>
</template>

<script>
export default {
  props: {
    links: null,
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
  @include font_lato_reg;
  font-size: 14px;
  line-height: 21px;
  margin: 30px 0 60px 0;

  &__item {
    color: $col_black_2;
    position: relative;
    text-decoration: none;

    &:after {
      content: "";
      position: absolute;
      right: -20px;
      top: 35%;
      border: 4px solid $col_black_2;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-right: 4px solid transparent;
      opacity: 0.8;
    }

    &:last-child {
      color: $col_gray_1;

      &:after {
        display: none;
      }
    }
  }
}
</style>
