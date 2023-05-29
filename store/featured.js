const slidesArr = [
  {
    id: "BXC1065",
    title: "BXC",
    description: "Вытяжное устройство для механической системы вентиляции",
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
];

export const state = () => {
  return {
    featuredArr: slidesArr,
  };
};

export const getters = {
  featuredArr: (s) => s.featuredArr,
};

export const mutations = {
  setFeaturedArr: (s, p) => (s.featuredArr = p),
};

export const actions = {
  init({ commit }) {
    commit("setFeaturedArr", slidesArr);
  },
};
