<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "App",

  data: () => ({
    //
  }),
      methods:{
      ...mapActions(['cargarLocalStorage'])
    },
    created(){
      this.cargarLocalStorage()
    }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Lato');
body {
  font-family: "Lato", sans-serif;
  background-color:#E5E5E5;
}
</style>
