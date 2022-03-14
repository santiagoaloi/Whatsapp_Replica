<template>
  <router-view />
</template>

<script>
  export default { name: 'App' };
</script>
<style>
  /* disables list color change on click */
  .disable-hover.v-list-item--link:before {
    background-color: unset !important;
  }

  .v-main,
  .v-application--wrap,
  html {
    background-color: #272f37 !important;
  }

  /* show vertical scrollbars only when needed */
  html {
    overflow-y: auto;
  }
  /* Apply WhatsApp scrollbar styles */
  ::-webkit-scrollbar {
    width: 9px !important;
    height: 6px !important;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #383f43;
  }
  ::-webkit-scrollbar-track {
    background: rgb(17, 27, 33);
  }
</style>
