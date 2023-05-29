const defaultArr = [
  {
    id: "G2H1065",
    title: "Вытяжное устройство G2H",
    description:
      "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
    imgUrl: "/images/g2h.png",
    price: 12644,
    quantity: 1,
  },
  {
    id: "BXC1065",
    title: "Вытяжное устройство BXC",
    description:
      "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
    imgUrl: "/images/bxc.png",
    price: 12644,
    quantity: 2,
  },
  {
    id: "GHN1065",
    title: "Вытяжное устройство GHN",
    description:
      "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
    imgUrl: "/images/ghn.png",
    price: 12644,
    quantity: 1,
  },
];

export const state = () => {
  return {
    cartArr: defaultArr,
    isInstallationAdded: true,
    customerInfo: {},
    errorGet: null,
    successPost: null,
  };
};

export const getters = {
  successPost: (s) => s.successPost,
  customerInfo: (s) => s.customerInfo,
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
  setSuccessPost: (s, p) => (s.successPost = p),
  setCustomerInfo: (s, p) => (s.customerInfo = p),
  setCartArr: (s, p) => (s.cartArr = p),
  setIsInstallationAdded: (s, p) => (s.isInstallationAdded = p),
};

export const actions = {
  async init({ commit }, arr) {
    const { data } = await useAsyncData("cart", () => $fetch("api/cart"));
    commit("setCartArr", data.value.cartArr);
  },

  postSuccess({ commit }, boolean) {
    commit("setSuccessPost", boolean);
  },

  async postOrder({ commit, state }) {
    const { data } = await useAsyncData("cart", () =>
      $fetch("api/cart", {
        method: "post",
        body: { ...state },
      })
    );
    if (data.value.status === "ok") {
      commit("setCartArr", []);
      commit("setSuccessPost", true);
      return data;
    }
    if (data.value.status === "error") {
      commit("successPost", false);
      return data;
    }
  },

  addCustomerInfo({ commit }, pl) {
    commit("setCustomerInfo", pl);
  },

  clearCart({ commit }) {
    commit("setCartArr", []);
    commit("setIsInstallationAdded", false);
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
