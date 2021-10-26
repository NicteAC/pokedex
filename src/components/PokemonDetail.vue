<template>
  <div class="detail">
    <div class="detail-view" v-if="show">
      <v-card v-if="pokemon">
        <v-img src="../assets/images/bg-poke.png" class="bg-img"></v-img>
        <v-img
          :src="imageUrl + pokemon.id + '.png'"
          class="poke-img"
          alt=""
        ></v-img>
        <div v-if="pokemon" class="detail-view__data">
          <div class="detail-view__info">
            <p class="left">
              <strong> Name: </strong>
              {{ pokemon.name }}
            </p>
          </div>
          <div class="detail-view__info">
            <p class="left">
              <strong> Weight: </strong>
              {{ pokemon.weight }}
            </p>
          </div>
          <div class="detail-view__info">
            <p class="left">
              <strong> Height: </strong>
              {{ pokemon.height }}
            </p>
          </div>
          <div class="detail-view__info">
            <p>
              <strong> Types: </strong>
              <span
                class="left"
                v-for="(value, index) in pokemon.types"
                :key="'value' + index"
              >
                {{ value.type.name }}
              </span>
            </p>
          </div>
        </div>
        <v-btn class="close" fab @click="closeDetail">
          <v-icon>mdi-close </v-icon>
        </v-btn>
        <div class="buttons">
          <button class="btn">Share to my friends</button>
          <v-btn fab x-small @click="addFavorite">
            <v-icon> mdi-star </v-icon>
          </v-btn>
        </div>
      </v-card>
      <PokemonNotFound v-else />
    </div>
  </div>
</template>

<script>
import PokemonNotFound from "../components/PokemonNotFound.vue";
import { mapActions, } from "vuex";
export default {
  name: "PokemonDetail",
  components: {
    PokemonNotFound,
  },
  props: ["pokemonUrl", "imageUrl"],
  data() {
    return {
      show: false,
      favoritos: [],
    };
  },
  methods: {
    ...mapActions(["add_Favorite"]),
    addFavorite() {
      this.favoritos.push(
        {
          name: this.pokemon.name,
          weight: this.pokemon.weight,
          height: this.pokemon.height,
          types: this.pokemon.types,
          id: this.pokemon.id
        }
      );
      localStorage.setItem("favoritos", JSON.stringify(this.favoritos))
    },
    fetchData() {
      let req = new Request(this.pokemonUrl);
      fetch(req)
        .then((resp) => {
          if (resp.status === 200) return resp.json();
        })
        .then((data) => {
          this.pokemon = data;
          this.show = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    closeDetail() {
      this.$emit("closeDetail");
    },
    share() {},
  },
  created() {
    this.fetchData();
    let data = localStorage.getItem("favoritos");
    if(data !=null){
      this.favoritos = JSON.parse(data);
    }
  },
};
</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  padding: 90px 10px 10px;
  width: calc(100%);
  height: calc(100vh);
  background: rgba($color: #000000, $alpha: 0.7);

  &-view {
    height: 506px;
    width: 570px;
    left: 0px;
    top: 0px;
    border-radius: 5px;

    .poke-img {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 20px;
      width: 180px;
      height: 180px;
      left: 194px;
    }
    .bg-img {
      height: 220px;
    }

    &__data {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-direction: column;
      width: 100%;
      margin: 7px 0px 40px 30px;

      &__info {
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        color: #5e5e5e;
        text-transform: capitalize;
        margin-bottom: 0;
        strong {
          font-weight: 700;
        }

        &left {
          float: left;
        }
      }
    }
    .buttons {
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
    }
    .btn {
      color: white;
      background-color: #f22539;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      height: 44px;
      border-radius: 60px;
      width: 195px;
      height: 44px;
      padding: 11px, 20px, 11px, 20px;
      margin-bottom: 20px;
    }
    .close {
      position: absolute;
      width: 26px;
      height: 26px;
      right: 15px;
      top: 10px;
      border-radius: 50%;
      background-color: #ffffff;
      cursor: pointer;
    }
  }
}
@media only screen and (max-width: 601px) {
  .container {
    width: 50% !important;
  }
}
</style>
