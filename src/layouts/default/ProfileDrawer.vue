<template>
  <v-navigation-drawer
    v-model="profileDrawer"
    app
    width="450"
    color="rgb(17,27,33)"
    temporary
    hide-overlay
    stateless
  >
    <template #prepend>
      <v-app-bar
        class="d-flex align-end"
        flat
        extension-height="55"
        extended
        :elevation="0"
        color="#202C33"
      >
        <v-container>
          <div class="d-flex" @click="profileDrawer = false">
            <v-icon style="cursor: pointer" size="27" class="subtle-white mr-4"
              >mdi-arrow-left</v-icon
            >
            <v-card-title class="subtle-white"> Profile </v-card-title>
          </div>
        </v-container>
      </v-app-bar>
    </template>

    <div
      data-aos="zoom-in"
      data-aos-delay="200"
      class="d-flex justify-center my-8"
    >
      <v-avatar size="220" color="grey">
        <v-img src="@/assets/tyrion.jpg"></v-img>
      </v-avatar>
    </div>

    <v-container
      data-aos="fade-down"
      data-aos-easing="ease-out-in"
      data-aos-delay="300"
      data-aos-duration="20"
      class="px-7"
    >
      <h4 class="font-weight-regular teal-title">Your name</h4>
      <div class="d-flex">
        <v-text-field
          v-model="nameFieldValue"
          :class="{ 'whatsapp-field-focus': nameFieldActive }"
          dark
          color="teal"
          :readonly="!nameFieldActive"
          maxlength="25"
          hide-details
        >
          <template #append>
            <div class="d-flex align-center">
              <small class="mr-3 grey--text">
                {{ 25 - nameFieldValue.length }}</small
              >

              <v-fab-transition
                appear
                hide-on-leave
                mode="out-in"
                :duration="1500"
              >
                <v-icon
                  v-if="!nameFieldActive"
                  style="cursor: pointer"
                  color="#89969f"
                  @mousedown.stop="nameFieldActive = !nameFieldActive"
                >
                  mdi-pencil
                </v-icon>
              </v-fab-transition>

              <v-fab-transition
                appear
                hide-on-leave
                mode="out-in"
                :duration="1500"
              >
                <v-icon
                  v-if="nameFieldActive"
                  style="cursor: pointer"
                  color="#89969f"
                  @mousedown.stop="nameFieldActive = !nameFieldActive"
                >
                  mdi-check
                </v-icon>
              </v-fab-transition>
            </div>
          </template>
        </v-text-field>
      </div>
      <div class="my-9">
        <p class="subtitle-color">
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </p>
      </div>
      <h4 class="font-weight-regular teal-title">About</h4>
      <div class="d-flex mt-5">
        <h3 class="subtle-white font-weight-light ml-1">Eating a good steak</h3>
        <v-spacer> </v-spacer>
        <v-icon class="subtitle-color mr-4 align-center">mdi-pencil </v-icon>
      </div>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
  import { sync } from 'vuex-pathify';

  export default {
    // Always define a component name, easier to find in the Vue developer tools extension.
    // Needed to auto-import components using the polugging app.js script. (@/pluggins/app.js)
    name: 'ProfileDrawer',
    data() {
      return {
        nameFieldActive: false,
        aboutFieldActive: false,
        nameFieldValue: 'Santiago',
        nameFieldAbout: `Hey! I'm using WhatsApp `,
      };
    },
    computed: {
      ...sync('head', ['profileDrawer']),
    },

    // Declaring imported copmponents so they can be used in the template code.
  };
</script>

<style scoped>
  .v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),
  .v-navigation-drawer--temporary:not(.v-navigation-drawer--close) {
    box-shadow: unset;
  }

  .subtle-white {
    color: #dadee0;
  }

  .teal-title {
    color: #1d7062;
  }

  ::v-deep .theme--dark.v-input input,
  .theme--dark.v-input textarea {
    color: white;
    font-size: 120%;
    font-weight: 300;
  }

  ::v-deep
    .whatsapp-field-focus.theme--dark.v-text-field
    > .v-input__control
    > .v-input__slot:before {
    border-color: #24a578;
    border-width: 0px !important;
  }

  ::v-deep
    .theme--dark
    .v-text-field
    > .v-input__control
    > .v-input__slot:before {
    border-color: transparent;
    border-width: 0px !important;
    pointer-events: none !important;
  }

  ::v-deep
    .whatsapp-field-focus.theme--dark.v-text-field
    > .v-input__control
    > .v-input__slot:after {
    background-color: unset !important;
    border-color: #24a578;
    border-width: 1px !important;
    transform: unset !important;
  }

  ::v-deep
    .theme--dark
    .v-text-field
    > .v-input__control
    > .v-input__slot:after {
    background-color: unset !important;
    border-color: transparent;
    border-width: 1px !important;
    transform: unset !important;
    pointer-events: none !important;
  }

  .v-input--is-disabled:not(.v-input--is-readonly) {
    pointer-events: unset;
  }
</style>
