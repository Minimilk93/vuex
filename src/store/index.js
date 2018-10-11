import Vuex from 'vuex';
import Vue from 'vue';
import shop from '@/api/shop';

Vue.use(Vuex);

export default new Vuex.Store({
  // data
  state: {
    products: []
  },
  // Equivalent of computed properties
  getters: {
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0);
    }
  },
  // methods
  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products);
          resolve();
        });
      });
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    }
  }
});
