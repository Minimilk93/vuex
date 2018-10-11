import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  // data
  state: {
    products: []
  },
  // Equivalent of computed properties
  getters: {
    productsCount() {}
  },
  // methods
  actions: {
    fetchProducts() {}
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    }
  }
});
