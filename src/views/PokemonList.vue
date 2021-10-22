<template>
  <div class="container">
    <div class="container__component">
      <PokemonSearch :apiUrl="apiUrl" @setPokemonUrl="setPokemonUrl" />
    </div>
    <div class="container__component">
      <PokemonList
        :imageUrl="imageUrl"
        :apiUrl="apiUrl"
        @setPokemonUrl="setPokemonUrl"
      />
    </div>
    <div class="container__component">
      <PokemonDetail
        v-if="showDetail"
        :pokemonUrl="pokemonUrl"
        :imageUrl="imageUrl"
        @closeDetail="closeDetail"
      />
    </div>
    <div class="container__component-footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import PokemonSearch from "../components/PokemonSearch.vue";
import PokemonList from "../components/PokemonList.vue";
import PokemonDetail from "../components/PokemonDetail.vue";
import Footer from "../components/Footer.vue";

export default {
  data: () => {
    return {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
      apiUrl: "https://pokeapi.co/api/v2/pokemon/",
      pokemonUrl: "",
      showDetail: false,
    };
  },
  components: {
    PokemonSearch,
    PokemonList,
    PokemonDetail,
    Footer,
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

<style lang="scss" scoped>
.container__component {
  display: flex;
  justify-content: center;

 
}

</style>
