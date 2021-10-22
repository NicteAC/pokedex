<template>
  <div class="list">
    <v-card
      class="card my-5"
      v-for="(pokemon, index) in pokemons"
      :key="'poke' + index"
      @click="setPokemonUrl(pokemon.url)"
    >
      <p class="py-5 pl-5">{{ pokemon.name }}</p>
      <v-btn class="btn-star" fab x-small>
        <v-icon> mdi-star </v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["imageUrl", "apiUrl"],
  data: () => {
    return {
      pokemons: [],
      nextUrl: "",
      currentUrl: "",
    };
  },
  methods: {
    fetchData() {
      let req = new Request(this.currentUrl);
      fetch(req)
        .then((resp) => {
          if (resp.status === 200) return resp.json();
        })
        .then((data) => {
          this.nextUrl = data.next;
          data.results.forEach((pokemon) => {
            pokemon.id = pokemon.url
              .split("/")
              .filter(function (part) {
                return !!part;
              })
              .pop();
            this.pokemons.push(pokemon);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    next() {
      this.currentUrl = this.nextUrl;
      this.fetchData();
    },
    setPokemonUrl(url) {
      this.$emit("setPokemonUrl", url);
    },
  },
  created() {
    this.currentUrl = this.apiUrl;
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;
  text-align: start;
  background-color: white;
  text-transform: capitalize;
  height: 60px;
  width: 570px;
  border-radius: 5px;
  cursor: pointer;
  .btn-star {
    margin: auto 10px auto;
  }
  p {
    height: 60px;
    width: 570px;
    font-size: 22px;
    border-radius: 5px;
  }
}
</style>

