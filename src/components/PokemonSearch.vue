<template>
  <div class="searchbar">
    <v-text-field
      v-model="searchvalue"
      v-on:keyup.enter="setPokemonUrl"
      hide-details
      solo
      required
      prepend-inner-icon="mdi-magnify"
      label="Search"
    />
  </div>
</template>

<script>
export default {
  props: ["apiUrl"],
  data: () => {
    return {
      searchvalue: "",
    };
  },
  methods: {
    setPokemonUrl(url) {
      if (this.searchvalue !== "")
        this.$emit("setPokemonUrl", this.apiUrl + this.searchvalue);
    },
  },
};
</script>

<style lang="scss" scoped>
.searchbar {
 height: 50px;
width: 570px;
left: 291px;
top: 35px;
border-radius: 5px;


}
</style>
