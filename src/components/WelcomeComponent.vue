<template>
<div class="welcome">
  <v-img src="../assets/images/pikachu.png" class="welcome__img" alt=""></v-img>
  <h1 class="welcome__title">Welcome to Pokédex</h1>
  <p class="welcome__text">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
  <button class="welcome__btn" @click="$router.push('/list')">Get started</button>
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
<style lang="scss" scoped>
  .welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__btn {
    color: white;
    background-color: #f22539;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    height: 44px;
    border-radius: 60px;
    text-transform: none;
    width: 131px;
    padding: 0;
  }
  &__img {
    height: 256px;
    margin: 70px auto 60px;
  }
  &__text {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #5e5e5e;
    max-width: 570px;
    margin: 0 auto 50px;
  }
  &__title {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #353535;
    margin-bottom: 30px;
  }
}
</style>
