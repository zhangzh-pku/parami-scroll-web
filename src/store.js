import { createStore } from "vuex";

const store = createStore({
  state: {
    signer: null,
  },
  mutations: {
    updateSigner(state, signer) {
      state.signer = signer;
    },
  },
  getters: {
    sharedSigner(state) {
      return state.signer;
    },
  },
});

export default store;
