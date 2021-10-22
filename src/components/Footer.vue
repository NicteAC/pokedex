<template>
  <v-footer class="footer">
    <div class="footer__btn-list">
      <button class="btn-list" rounded @click="$router.push('/list')">
        <v-icon color="white" left> mdi-format-list-bulleted-square </v-icon>
        All
      </button>
    </div>
    <div class="footer__btn-star">
      <button class="btn-favorite" @click="$router.push('/favorite')" rounded>
        <v-icon color="white" left> mdi-star </v-icon>
        Favorites
      </button>
    </div>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.footer {
  display: flex;
  justify-content: center;
  background: #ffffff;
  height: 80px;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);

  &__btn-star {
    margin-left: 20px;
  }
}
.btn-list {
  background-color: #f22539;
  color: #ffffff;
  height: 44px;
  width: 275px;
  border-radius: 60px;
}
.btn-favorite {
  background-color: #f22539;
  color: #ffffff;
  height: 44px;
  width: 275px;
  border-radius: 60px;
}
</style>