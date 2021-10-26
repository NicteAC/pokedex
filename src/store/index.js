import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemones: [],
    favoritos: [],
  },
  mutations: {
    cargar(state, payload) {
      state.favoritos = payload
    },
    SET_POKEMON(state, i) {
      const pokemon = state.pokemones[i];
      state.favoritos.push(pokemon);
    },
    set(state, payload) {
      state.favoritos.push(payload)
      localStorage.setItem('favoritos', JSON.stringify(state.favoritos))
    },
  },
  actions: {
    cargarLocalStorage({ commit }) {
      if (localStorage.getItem('favoritos')) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos'))
        commit('cargar', favoritos)
        return
      }

      localStorage.setItem('favoritos', JSON.stringify([]))
    },
    add_Favorite({ commit, }, i) {
      commit("SET_POKEMON", i);
    },
    setFavoritos({ commit }, pokemon) {
      commit('set', pokemon)
    }
  },
  getters: {
  },
  modules: {
  },
})
