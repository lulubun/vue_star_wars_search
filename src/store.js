import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchRes: [],
  },
  mutations: {
    setSearch(state, payload) {
      state.searchRes = payload;
    },
    clearResults(state) {
      state.searchRes = [];
    },
  },
  actions: {
    setSearch({ commit }, payload) {
      commit("setSearch", payload);
    },
    clearResults({ commit }) {
      commit('clearResults');
    },
  }
})