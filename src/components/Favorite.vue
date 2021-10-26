<template>
  <div class="list">
    <v-card
      class="card my-5"
      v-for="(poke, index) in $store.state.favoritos"
      :key="index"
    >
      <p class="py-5 pl-5">{{ poke.name }}</p>
      <v-btn class="btn-star" fab x-small>
        <v-icon> mdi-star </v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>



