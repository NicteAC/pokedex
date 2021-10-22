import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemones: [],
    favoritos: {}
  },
  mutations: {
    SET_POKEMON(state, pokemon) {
      state.favoritos.push(pokemon);
    },
  },
  actions: {
    add_Favorite({ commit }, pokemon) {
      commit("SET_POKEMON", pokemon);
    },
  },
  getters: {
   
  },
  modules: {
  },
})
