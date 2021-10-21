<template>
  <div class="ma-5">
    <v-autocomplete
      v-model="model"
      :items="allPokemon"
      :loading="isLoading"
      :search-input.sync="search"
      prepend-inner-icon="mdi-magnify"
      chips
      clearable
      hide-details
      hide-selected
      item-text="type"
      item-value="symbol"
      label="search"
      solo
      @change="getFiltro"
    >
      <template v-slot:selection="{ item }">
        <span v-text="item.name"></span>
      </template>
      <template v-slot:item="{ item }">
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item-content>
      </template>
    </v-autocomplete>
    <v-container>
      <v-row>
        <v-col cols="8" v-for="(poke, index) in allPokemon" :key="index">
          <v-card class="mx-5" @click="alert = !alert">
            {{ poke.name }}
            <v-btn fab x-small @click="addFavorite">
              <v-icon> mdi-star </v-icon>
            </v-btn>

            <v-alert :value="alert" border="top" transition="scale-transition">
              <v-card>
                <v-img src="../assets/images/bg-poke.png"></v-img>
                <p>Name: {{poke.name}}</p>
                <p>Name: {{poke.url}}</p>
                <p>Name: {{poke.height}}</p>
                <p>Name: {{poke.types}}</p>
              </v-card>
            </v-alert>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div></div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data: () => ({
    alert: false,
    allPokemon: [],
    isLoading: false,
    items: [],
    model: null,
    search: null,
    tab: null,
    overlay: true,
  }),
  computed: {
    ...mapState(["pokemon"]),
    ...mapGetters(["getPokemon"]),
  },
  methods: {
    ...mapActions(["getData"]),
    getFiltro() {
      this.allPokemon = this.getPokemon(this.model.name);
    },
  },
  created() {
    this.getData();
  },
  async mounted() {
    const load = Promise.all([await this.getData()]);
    if (load) {
      this.overlay = false;
      this.allPokemon = await this.getPokemon();
    }
  },
  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    search(val) {
      // Items have already been loaded
      if (this.items.length > 0) return;
      this.isLoading = true;
    },
  },
};
</script>

<style>
</style>