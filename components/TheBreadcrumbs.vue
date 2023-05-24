<template>
  <div class="breadcrumbs">
    <span class="breadcrumbs__item">Главная</span>
    <span class="breadcrumbs__item">Корзина</span>
  </div>
</template>
<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
  @include font_lato_reg;
  font-size: 14px;
  line-height: 21px;
  color: $col_black_2;
  margin: 30px 0 60px 0;

  &__item {
    position: relative;

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
