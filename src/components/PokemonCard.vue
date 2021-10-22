<template>
  <div>
    <div v-if="show">
      <v-card v-if="pokemon">
        <v-img src="../assets/images/bg-poke.png"></v-img>
        <v-img :src="imageUrl + pokemon.id + '.png'" alt=""></v-img>
        <div v-if="pokemon" class="data">
          <p>Name: {{ pokemon.name }}</p>
          <div class="property">
            <p class="right">Weight: {{ pokemon.weight }}</p>
          </div>
          <div class="property">           
            <p class="right">Height: {{ pokemon.height }}</p>
          </div>
          <h3>Pokemon Types</h3>
          <div class="types">
            <p
              class="type"
              v-for="(value, index) in pokemon.types"
              :key="'value' + index"
            >
              Types: {{ value.type.name }}
            </p>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>