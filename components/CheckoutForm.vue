<template>
  <div class="checkout__proceed">
    <h2 class="title">Итого</h2>
    <ul class="list">
      <li class="list_item">
        Сумма заказа <span>{{ 50576 }} &#8381;</span>
      </li>
      <li class="list_item">Количество <span>4 шт</span></li>
      <li class="list_item">Установка <span>Нет</span></li>
    </ul>
    <div class="total-price">
      Стоимость товаров <span>{{ 50576 }} &#8381;</span>
    </div>
    <button class="button filled">Оформить заказ</button>
    <button class="button outlined">Купить в 1 клик</button>
  </div>
</template>

<style lang="scss" scoped>
.checkout__proceed {
  background-color: $col_gray_2;
  border-radius: $border-radius;
  padding: 40px 30px;
  width: 425px;

  & .title {
    color: $col_black_1;
    @include font_lato_semibold;
    font-size: 24px;
    line-height: 29px;
    margin: 0 0 31px 0;
  }

  & .list {
    font-size: 16px;
    line-height: 23px;
    @include font_lato_med;
    color: $col_black_1;
    padding: 0 0 29px 0;
    margin: 0 0 16px 0;
    border-bottom: 1px solid #aeb0b6;
    display: flex;
    flex-direction: column;
    gap: 18px;

    &_item {
      display: flex;
      justify-content: space-between;

      &span {
        @include font_roboto_reg;
      }
    }
  }
  & .total-price {
    @include font_lato_semibold;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 0 32px 0;

    & span {
      @include font_roboto_bold;
      font-size: 26px;
      line-height: 34px;
    }
  }
  & .button.filled {
    margin: 0 0 16px 0;
  }
}
</style>
