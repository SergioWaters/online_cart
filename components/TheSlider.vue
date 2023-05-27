<template>
  <section class="featured-items">
    <div class="heading">
      <h2 class="title">Просмотренные товары</h2>
      <div class="slider-buttons">
        <button class="prev btn">
          <svg
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 19L1 10L9 0.999999"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
        <div class="pages"></div>
        <button class="next btn">
          <svg
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1L9 10L1 19"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
    <Swiper
      :slides-per-view="4"
      :navigation="navigation"
      :modules="modules"
      :pagination="pagination">
      <SwiperSlide
        v-for="{ id, title, description, imgUrl, price, priceEuro } in [
          ...slidesArr,
          ...slidesArr,
        ]"
        :key="id">
        <SliderProduct
          :id="id"
          :title="title"
          :description="description"
          :imgUrl="imgUrl"
          :price="price"
          :priceEuro="priceEuro" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";

export default {
  setup() {
    console.log(Pagination);
    return {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: ".next.btn",
        prevEl: ".prev.btn",
      },
      pagination: {
        type: "fraction",
        el: ".pages",
        currentClass: "active",
        totalClass: "total",
      },
    };
  },

  data() {
    return {
      slidesArr: [
        {
          id: "BXC1065",
          title: "BXC",
          description:
            "Вытяжное устройство для механической системы вентиляции",
          imgUrl: "/images/bxc.png",
          price: "6 848 ₽ – 56 584 ₽",
          priceEuro: "77.60 € – 643.86 €",
          quantity: 1,
        },
        {
          id: "G2H1065",
          title: "G2H",
          description:
            "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
          imgUrl: "/images/g2h.png",
          price: "6 848 ₽ – 56 584 ₽",
          priceEuro: "77.60 € – 643.86 €",
          quantity: 1,
        },
        {
          id: "G2H1065",
          title: "GHN",
          description: "Вытяжное устройство с датчиком присутствия",
          imgUrl: "/images/ghn.png",
          price: "6 848 ₽ – 56 584 ₽",
          priceEuro: "77.60 € – 643.86 €",
          quantity: 1,
        },
        {
          id: "G2H1065",
          title: "TDA",
          description: "Вытяжное устройство с датчиком присутствия",
          imgUrl: "/images/tda.png",
          price: "6 848 ₽ – 56 584 ₽",
          priceEuro: "77.60 € – 643.86 €",
          quantity: 1,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-pagination-current {
  font-size: 24px;
  line-height: 36px;
  color: $col_black_1;
}
.featured-items {
  margin: 100px 0 100px 0;

  & .heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 45px;

    & .title {
      @include font_lato_semibold;
      font-size: 30px;
      line-height: 36px;
      color: $col_black_1;
    }
  }
  .slider-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    & .pages {
      @include font_lato_reg;
      font-size: 18px;
      line-height: 27px;
      color: $col_gray_1;

      & .active,
      & .swiper-pagination-current {
        font-size: 24px;
        line-height: 36px;
        color: $col_black_1;
      }
    }
    & .btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: $col_gray_3;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
    }
  }
  .footer {
  }
}
</style>
