const cart = {
  state: {
    cart: 1
  },
  mutations: {
    setCartMore (state) {
      state.cart++
    },
    setCartLess (state) {
      if (state.cart > 0) {
        state.cart--
      }
    }
  },
}

export default cart
