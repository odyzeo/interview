const overlay = {
  state: {
    overlay: true
  },
  mutations: {
    setOverlay (state) {
      state.overlay = !state.overlay
    }
  }
}

export default overlay
