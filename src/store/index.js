import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon: []
  },
  mutations: {
    GET_POKEMONS(state, pokemon) {
      state.pokemon = pokemon;
    }
  },
  actions: {
    async getData({ commit }) {
      try {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon");
        const object = await data.json();
        commit("GET_POKEMONS", object.results);
      } catch (error) {
        console.log(error);
      }
    }
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
