<template>
  <article class="product">
    <img src="./Header/g2h.png" alt="{{}}" class="product__image" />
    <div class="product__description">
      <h3 class="title">G2H</h3>
      <p class="text">
        12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия
      </p>
    </div>
    <div class="product__total">
      {{ 6848 }} &#8381; - {{ 56584 }} &#8381;
      <div class="product__total_euro">{{ 77.6 }} &euro; - {{ 643.86 }} &euro;</div>
      <button class="button filled">Подробнее</button>
    </div>
  </article>
</template>

<style scoped lang="scss">
.product {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;
  background-color: $col_gray_2;
  border-radius: $border-radius;
  width: 305px;
  height: 563px;

  &__image {
    height: 245px;
    width: 245px;
  }

  &__description {
    flex: 1;
    color: $col_black_1;
    margin: 0;

    .title {
      @include font_lato_bold;
      font-size: 22px;
      line-height: 26px;
      margin-bottom: 10px;
    }
    .text {
      @include font_lato_reg;
      font-size: 14px;
      line-height: 20px;
    }
  }

  &__total {
    @include font_roboto_med;
    font-size: 22px;
    line-height: 28px;
    color: $col_black_1;

    &_euro {
      @include font_lato_reg;
      font-size: 16px;
      line-height: 23px;
      color: $col_gray_1;
      margin-bottom: 20px;
    }
    & .button {
    }
  }
}
</style>
