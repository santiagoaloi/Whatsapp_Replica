<template>
  <v-app-bar app color="rgb(32,44,51)">
    <app-bar-avatar :tile="tile"></app-bar-avatar>
    <v-list-item-content class="ml-4 white-§-text">
      <v-list-item-title>Evan You</v-list-item-title>
      <v-list-item-subtitle class="subtitle-color mt-1">last seen today at 00:05</v-list-item-subtitle>
    </v-list-item-content>

    <v-spacer />

    <v-icon class="mx-3 pa-1" color="#B0BAC0" @click.stop> mdi-magnify </v-icon>
    <v-icon class="ml-3 mt-1 pa-1" color="#B0BAC0" @click.stop> mdi-dots-vertical </v-icon>
  </v-app-bar>
</template>

<script>
  import AppBarAvatar from './Elements/AppBarAvatar.vue';

  export default {
    name: 'DefaultAppBar',
    components: {
      AppBarAvatar,
    },
    data() {
      return {
        tile: true,
      };
    },
  };
</script>

<style scoped></style>
