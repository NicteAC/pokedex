import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon: [],
    favoritos: {}
  },
  mutations: {
    GET_POKEMONS(state, pokemon) {
      state.pokemon = pokemon;
    },
    SET_FAVORITOS(state, payload) {
      state.favoritos[payload.id] = { ...payload }
      console.log(state.favoritos)
    },
  },
  actions: {
    async getData({ commit }) {
      try {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon");
        const pokemons = await data.json();
        commit("GET_POKEMONS", pokemons.results);
      } catch (error) {
        console.log(error);
      }
    },
    addFavorite({ commit, state }, pokemon) {
      state.favoritos.hasOwnProperty(pokemon.id)
        ? pokemon.cantidad = state.favoritos[pokemon.id].cantidad + 1
        : pokemon.cantidad = 1
      commit("SET_FAVORITOS", pokemon)
    },
  },
  getters: {
    getPokemon: state => payload => {
      const data = state.pokemon;
      let reply = "";
      if (payload) {
        reply = data.filter(detail => detail.name.includes(payload));
      } else {
        reply = data;
      }
      const result = reply.map(poke => {
        const { name } = poke;
        return {
          name
        };
      });
      return result;
    },
  },
  modules: {
  },
})
