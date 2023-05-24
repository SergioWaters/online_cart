export const state = () => {
  return {
    cartArr: [],
  };
};

export const getters = {
  cartArr: (s) => s.cartArr,
  cartTotalPrice: (s) =>
    s.cartArr.reduce((acc, curr) => acc + curr.price, s.cartArr[0].price),
  cartTotalQuantity: (s) =>
    s.cartArr.reduce((acc, curr) => acc + curr.quantity, s.cartArr[0].quantity),
};

export const mutations = {
  setCartArr: (s, p) => (s.cartArr = p),
};

export const actions = {
  async addQuantity({ commit, state }, id) {
    const newArr = state.cartArr;
    const timerId = setTimeout(() => {
      const indx = newArr.findIndex((p) => p.id === id);
      newArr[indx].quantity++;
    }, 1000);
    commit("setCartArr", newArr);
    clearTimeout(timerId);
  },

  async decrQuantity({ commit, state }, id) {
    const newArr = state.cartArr;
    const timerId = setTimeout(() => {
      const indx = newArr.findIndex((p) => p.id === id);
      newArr[indx].quantity > 0
        ? newArr[indx].quantity--
        : (newArr[indx].quantity = 0);
    }, 1000);
    commit("setCartArr", newArr);
    clearTimeout(timerId);
  },

  async removeProduct({ commit, state }, id) {
    const newArr = state.cartArr;
    const timerId = setTimeout(() => {
      newArr = [...newArr.filter((p) => p.id !== id)];
    }, 1000);
    commit("setCartArr", newArr);
    clearTimeout(timerId);
  },
};
