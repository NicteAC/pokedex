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
            <p
              class="left"
              v-for="(value, index) in pokemon.types"
              :key="'value' + index"
            >
              <strong> Types: </strong>
              {{ value.type.name }}
            </p>
          </div>
        </div>
        <v-tbn class="close" fab @click="closeDetail">
          <v-icon>mdi-close </v-icon>
        </v-tbn>
        <v-btn color="red" rounded>share to my friends</v-btn>
        <v-btn fab x-small @click="addFavorite">
          <v-icon> mdi-star </v-icon>
        </v-btn>
      </v-card>
      <h2 v-else>The pokemon was not found</h2>
    </div>
    <i v-else class="fas fa-spinner fa-spin"></i>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["pokemonUrl", "imageUrl"],
  data: () => {
    return {
      show: false,
      pokemon: {
        name: ""
      },
    };
  },
  methods: {
    ...mapActions(["add_Favorite"]),
    addFavorite() {
      const { pokemon } = this;
      this.add_Favorite(pokemon);
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
  },
  created() {
    this.fetchData();
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
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  background: rgba($color: #000000, $alpha: 0.7);

  &-view {
    .poke-img {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 30px;
      width: 180px;
      height: 180px;
    }

    &__data {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin-bottom: 40px;

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
</style>
