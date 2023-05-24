<template>
  <article class="product">
    <img :src="imgUrl" :alt="title" class="product__image" />
    <div class="product__description">
      <h3 class="title">{{ title }}</h3>
      <p class="text">
        {{ description }}
      </p>
      <span class="article">{{ id }}</span>
    </div>
    <div class="product__quantity">
      <button class="product__quantity_item btn-decrease" :on-click="decrease">-</button>
      <input type="text" class="product__quantity_item input" :placeholder="quantity" />
      <span class="alert hidden">{{ price }}&nbsp;&#8381;/шт. </span>
      <button class="product__quantity_item btn-increase" :on-click="increase">+</button>
    </div>
    <div class="product__total">{{ price * quantity }}&nbsp;&#8381;</div>
    <button class="product__btn-close" :on-click="remove">&times;</button>
  </article>
</template>

<script>
export default {
  props: {
    product: {
      id,
      title,
      price,
      quantity,
      imgUrl,
      description,
    },
  },
  emits: ["increase", "decrease", "remove"],
  methods: {
    increase() {
      this.$emit("increase", id);
    },
    decrease() {
      this.$emit("decrease", id);
    },
    remove() {
      this.$emit("remove", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 50px 20px 0;
  position: relative;

  &__image {
    width: 100px;
    height: 100px;
    margin: 0 30px 0 0;
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-width: 263px;
    margin: 0 80px 0 0;

    & .title {
      @include font_lato_semibold;
      font-size: 16px;
      line-height: 23px;
      color: $col_black_1;
    }
    & .text {
      @include font_lato_reg;
      font-size: 12px;
      line-height: 18px;
      color: $col_black_3;
    }
    & .article {
      @include font_lato_reg;
      font-size: 14px;
      line-height: 21px;
      color: $col_gray_1;
    }
  }

  &__quantity {
    display: flex;
    gap: 2px;
    margin: 0 84px 0 0;
    position: relative;

    &_item {
      width: 34px;
      height: 34px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color: $col_gray_2;
    }

    & .btn-decrease {
      border-radius: 4px 0 0 4px;
    }

    & .input {
    }

    & .alert {
      position: absolute;
      top: 100%;
      left: 0;
      @include font_roboto_reg;
      font-size: 12px;
      line-height: 17px;
      width: 100%;
      text-align: center;

      &.hidden {
        display: none;
      }
    }

    & .btn-increase {
      border-radius: 0 4px 4px 0;
    }
  }

  &__total {
    word-wrap: break-word;
    font-size: 18px;
    line-height: 26px;
    @include font_roboto_med;
  }

  &__btn-close {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 27px;
    right: 10px;
    font-size: 21px;
  }
}
</style>
