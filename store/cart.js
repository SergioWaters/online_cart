const defaultArr = [
  {
    id: "G2H1065",
    title: "Вытяжное устройство G2H",
    decsription:
      "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
    imgUrl: "@/assets/images/g2h.png",
    price: 12644,
    quantity: 2,
  },
];

export const state = () => {
  return {
    cartArr: [],
    isInstallationAdded: true,
  };
};

export const getters = {
  isInstallationAdded: (s) => s.isInstallationAdded,
  cartArr: (s) => s.cartArr,
  cartTotalPrice: (s) => {
    return s.cartArr.length
      ? s.cartArr.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
      : 0;
  },
  cartTotalQuantity: (s) => {
    return s.cartArr.length
      ? s.cartArr.reduce((acc, curr) => acc + curr.quantity, 0)
      : 0;
  },
};

export const mutations = {
  setCartArr: (s, p) => (s.cartArr = p),
  setIsInstallationAdded: (s, p) => (s.isInstallationAdded = p),
};

export const actions = {
  init({ commit }) {
    commit("setCartArr", defaultArr);
  },

  changeIsInstallationAdded({ commit }, payload) {
    commit("setIsInstallationAdded", payload);
  },

  addQuantity({ commit, state }, id) {
    const newArr = state.cartArr;
    const indx = newArr.findIndex((p) => p.id === id);
    newArr[indx].quantity++;
    commit("setCartArr", newArr);
  },

  decrQuantity({ commit, state }, id) {
    const newArr = state.cartArr;
    const indx = newArr.findIndex((p) => p.id === id);
    newArr[indx].quantity > 0
      ? newArr[indx].quantity--
      : (newArr[indx].quantity = 0);
    commit("setCartArr", newArr);
  },

  removeProduct({ commit, state }, id) {
    let newArr = state.cartArr;
    newArr = [...newArr.filter((p) => p.id !== id)];
    commit("setCartArr", newArr);
  },
};
