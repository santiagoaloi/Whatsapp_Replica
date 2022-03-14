<template>
  <v-main>
    <v-container fill-height fluid class="bg-color border-bottom">
      <v-fade-transition hide-on-leave>
        <v-card v-if="visible" width="650" flat class="mx-auto transparent">
          <v-img height="280" contain src="@/assets/splash_phone.jpg" />
          <div class="d-flex justify-center mt-4">
            <h1 class="font-weight-thin white--text">
              Keep your phone connected
            </h1>
          </div>
          <div class="text-center mt-2">
            <p class="subtitle-color font-weight-regular">
              WhatsApp connects to your phone to sync messages. To reduce data
              usage connect your phone to Wi-Fi.
            </p>
          </div>

          <v-divider style="background: #36434e" class="my-9" />

          <div class="text-center mt-6">
            <p class="subtitle-color font-weight-regular">
              <v-icon class="subtitle-color mr-2">mdi-laptop</v-icon>Make calls
              from desktop with WhatsApp for Windows.
              <span style="cursor: pointer" class="teal--text"
                >Get it here.</span
              >
            </p>
          </div>
        </v-card>
      </v-fade-transition>
    </v-container>
  </v-main>
</template>

<script>
  export default {
    name: 'DefaultView',
    data() {
      return {
        visible: false,
      };
    },

    mounted() {
      this.displayContent();
    },

    methods: {
      displayContent() {
        setTimeout(() => {
          this.visible = true;
        }, 500);
      },
    },
  };
</script>
<style>
  .bg-color {
    background: #252f38;
  }

  .border-bottom {
    border-bottom: solid 6px rgb(17, 126, 102);
  }
</style>
