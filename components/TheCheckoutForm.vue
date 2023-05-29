<template>
  <div class="checkout__proceed">
    <h2 class="title">Итого</h2>
    <ul class="list">
      <li class="list_item">
        Сумма заказа <span>{{ totalSum }} &#8381;</span>
      </li>
      <li class="list_item">
        Количество <span>{{ totalQuantity }} шт</span>
      </li>
      <li class="list_item">
        Установка <span>{{ isNeeded }}</span>
      </li>
    </ul>
    <div class="total-price">
      Стоимость товаров <span>{{ totalSum }} &#8381;</span>
    </div>
    <TheButton text="Оформить заказ" type="filled" @click.prevent="putOrder" />
    <TheButton
      text="Купить в 1 клик"
      type="outlined"
      v-if="!isOneClick"
      @click.prevent="isOneClick = !isOneClick" />
    <div class="oneclick" v-if="isOneClick">
      <p class="list_item">
        Оставьте номер телефона и наш менеджер с вами свяжется
      </p>
      <div class="oneclick__box">
        <input
          type="text"
          v-model="form.phoneNumber"
          :placeholder="errorPhone || 'Номер телефона'"
          :class="`${
            errorPhone
              ? 'oneclick__input input outlined red'
              : 'oneclick__input input outlined'
          }`" />
        <button
          class="oneclick__button input filled"
          @click.prevent="orderOneClick">
          Купить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    orderOneClick() {
      this.errorPhone = null;
      this.form.phoneNumber
        ? this.putOrder()
        : (this.errorPhone = "Введите номер телефона");
    },
    async putOrder() {
      if (!this.totalQuantity) return;

      const data = await this.$store.dispatch("cart/postOrder");

      if (data.value.status === "ok") {
        this.$router.push({
          path: "/order",
          query: { orderId: data.value.orderId },
        });
      }
    },
  },
  data() {
    return {
      errorPhone: null,
      isOneClick: false,
      form: {
        phoneNumber: null,
      },
    };
  },
  props: {
    totalSum: 0,
    totalQuantity: 0,
    isInstallationNeeded: false,
  },
  computed: {
    isNeeded() {
      return this.isInstallationNeeded ? "Да" : "Нет";
    },
    isSuccessPost() {
      return this.$store.getters["cart/successPost"];
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout__proceed {
  background-color: $col_gray_2;
  border-radius: $border-radius;
  padding: 40px 30px;
  width: 425px;
  margin: 83px 0 0 0;

  & .title {
    color: $col_black_1;
    @include font_lato_semibold;
    font-size: 24px;
    line-height: 29px;
    margin: 0 0 31px 0;
  }

  & .list {
    padding: 0 0 29px 0;
    margin: 0 0 10px 0;
    border-bottom: 1px solid #aeb0b6;
    display: flex;
    flex-direction: column;
    gap: 18px;

    &_item {
      font-size: 16px;
      line-height: 23px;
      @include font_lato_med;
      color: $col_black_1;
      display: flex;
      justify-content: space-between;

      & span {
        font-size: 16px;
        line-height: 23px;
        color: $col_black_1;
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

  .oneclick {
    margin: 40px 0 0 0;

    &__box {
      display: flex;
      gap: 10px;
      margin: 10px 0 0 0;

      & input {
        flex: 3;
      }
      & button {
        flex: 1;
      }
    }
  }
  .input {
    @include font_lato_semibold;
    font-size: 18px;
    line-height: 26px;
    padding: 14px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: $border-radius;
    border: 1px solid $col_blue_1;

    &.filled {
      background-color: $col_blue_1;
      color: white;
    }
    &.outlined {
      background-color: white;
      color: $col_blue_1;
    }
    &.red {
      background-color: rgba(223, 38, 38, 0.181);
      border: 1px solid rgba(223, 38, 38);
    }
  }
}
</style>
