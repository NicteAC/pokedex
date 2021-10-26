<template>
  <div>
    <PokemonSearch :apiUrl="apiUrl" @setPokemonUrl="setPokemonUrl" />
    <Favorite :imageUrl="imageUrl" />
    <Footer />
  </div>
</template>

<script>
import PokemonSearch from "../components/PokemonSearch.vue";
import Favorite from "../components/Favorite.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { PokemonSearch, Favorite, Footer },
  data: () => {
    return {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
      apiUrl: "https://pokeapi.co/api/v2/pokemon/",
      pokemonUrl: "",
      showDetail: false,
    };
  },
  methods: {
    setPokemonUrl(url) {
      this.pokemonUrl = url;
      this.showDetail = true;
    },
    closeDetail() {
      this.pokemonUrl = "";
      this.showDetail = false;
    },
  },
};
</script>

<style>
</style>