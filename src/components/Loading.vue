<template>
  <div class="main-container">
    <img src="../assets/images/loader.png" class="rotate" />
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style scoped>
.main-container {
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
}
.rotate {
  margin: 0;
  position: absolute;
  top: 45%;
  left: 45%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  animation: rotation 8s infinite linear;
}
@media only screen and (max-width: 600px) {
  .rotate {
    left: 35%;
  }
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
