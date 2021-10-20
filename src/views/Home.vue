<template>
  <div>
    <WelcomeComponent />
  </div>
</template>

<script>
 import WelcomeComponent from "../components/WelcomeComponent.vue"

  export default {
    name: 'Home',

    components: {
     WelcomeComponent,
    },
  }
</script>
