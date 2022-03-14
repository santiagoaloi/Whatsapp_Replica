<template>
  <v-app>
    <default-initial v-if="!booted" />
    <default-splash v-if="booted && showSplash" />
    <template
      v-if="!showSplash && booted"
    >
      <default-app-bar />
      <default-view />
    </template>

    <span v-if="booted">
      <default-drawer />

      <profile-drawer v-if="booted" />
    </span>
  </v-app>
</template>

<script>
  import { sync } from "vuex-pathify";

  export default {
    name: "DefaultLayout",
    computed: {
      ...sync("head", ["showSplash", "booted", "profileDrawer"]),
    },

    components: {
      DefaultView: () => import("./View"),
      DefaultAppBar: () => import("./AppBar"),

      DefaultSplash: () => import("./Splash"),
      DefaultDrawer: () => import("./Drawer"),
      ProfileDrawer: () => import("./ProfileDrawer"),
      DefaultInitial: () => import("./InitialStartup"),
    },
  };
</script>
