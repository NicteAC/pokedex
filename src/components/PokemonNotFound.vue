<template>
  <div class="Message__empty">
    <h3>Uh-oh!</h3>
    <p>You look lost on your journey!</p>
    <button class="btn" @click="$router.push('/')">Go back Home</button>
  </div>
</template>
<script>
export default {
  name: "PokemonNotFound",
};
</script>
<style scoped>
body {
  background-color: white;
}
h3 {
  font-family: Lato;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
}
p {
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
}
.btn {
  display: flex;
  align-content: center;
  padding: 11px 20px;
  width: 155px;
  height: 44px;
  background: #f22539;
  border-radius: 60px;
}
</style>