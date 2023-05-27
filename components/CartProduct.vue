<template>
  <article class="product">
    <img :src="product.imgUrl" :alt="product.title" class="product__image" />
    <div class="product__description">
      <h3 class="title">{{ product.title }}</h3>
      <p class="text">
        {{ product.description }}
      </p>
      <span class="article">Артикул: {{ product.id }}</span>
    </div>
    <div class="product__quantity">
      <button class="product__quantity_item btn-decrease" :onClick="decrease">
        -
      </button>
      <input
        type="text"
        class="product__quantity_item input"
        :placeholder="product.quantity" />
      <span class="alert" v-if="isVisibleAlert(product.quantity)"
        >{{ addSpace(product.price) }}&nbsp;&#8381;/шт.
      </span>
      <button class="product__quantity_item btn-increase" :onClick="increase">
        +
      </button>
    </div>
    <div class="product__total">
      {{ addSpace(product.price * product.quantity) }}&nbsp;&#8381;
    </div>
    <button class="product__btn-close" :onClick="remove">&times;</button>
  </article>
</template>

<script>
export default {
  setup() {
    const addSpace = useNuxtApp().addSpace;
    return {
      addSpace,
    };
  },
  props: {
    product: {},
  },
  emits: ["increase", "decrease", "remove"],
  methods: {
    isVisibleAlert: (quan) => quan > 1,
    increase() {
      this.$emit("increase", this.product.id);
    },
    decrease() {
      this.$emit("decrease", this.product.id);
    },
    remove() {
      this.$emit("remove", this.product.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 25px 50px 20px 13px;
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
      cursor: pointer;
    }

    & .input {
      pointer-events: none;
    }

    & .alert {
      position: absolute;
      top: 128%;
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
      cursor: pointer;
    }
  }

  &__total {
    white-space: nowrap;
    font-size: 18px;
    line-height: 26px;
    @include font_roboto_med;
    min-width: 70px;
    text-align: right;
  }

  &__btn-close {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 20px;
    right: 5px;
    font-size: 21px;
    cursor: pointer;
  }

  @media (width < 700px) {
    flex-direction: column;
    gap: 30px;

    &__total,
    &__quantity,
    &__description,
    &__image {
      margin: 0;
    }
  }
}
</style>
