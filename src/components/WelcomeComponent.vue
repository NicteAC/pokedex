<template>
<div>
  <img src="../assets/images/pikachu.png" alt="#">
  <h1>Welcome to Pokédex</h1>
  <p>The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
  <v-btn color="alert" @click="$router.push('/list')">Get started</v-btn>
</div>
</template>

<script>
  export default {
    name: 'WelcomeComponent',

    data: () => ({
      //
    }),
  }
</script>
