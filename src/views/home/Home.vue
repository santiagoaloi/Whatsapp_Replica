<template>
  <div class="background">hola</div>
</template>

<script>
  export default {
    name: 'HomeView',
  };
</script>
<style scoped>
  .background {
    height: 100%;
    background-image: url('~@/assets/bg1.jpeg');
    background-repeat: repeat;
    background-size: 312.5px 649.25px;
    filter: contrast(113%) grayscale(55%) saturate(1.1);
  }
</style>
