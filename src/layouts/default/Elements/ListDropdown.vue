<template>
  <div class="text-center mt-2">
    <v-menu origin="top left" transition="scale-transition" offset-y>
      <template #activator="{ on }">
        <v-icon size="28" class="mr-n1" color="grey" v-on="on" @click.stop>
          mdi-chevron-down
        </v-icon>
      </template>
      <v-list color="#263137" width="190" dark>
        <v-list-item
          v-for="(menu, index) in menuItems"
          :key="index"
          class="disable-hover active-contact-menu-hover"
          :ripple="false"
          @click="triggerAction(menu.action)"
        >
          <v-list-item-title class="dialog-text-color">{{ menu.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-dialog v-model="dialog" overlay-opacity="0.8" overlay-color="rgb(11,20,26)" width="400">
      <v-card flat color="#3e4a53" dark>
        <v-container>
          <v-card-text class="dialog-text-color"> Delete this chat?</v-card-text>
        </v-container>

        <v-card-actions class="pa-5">
          <v-spacer />

          <v-hover v-slot="{ hover }">
            <v-card
              elevation="1"
              style="cursor: pointer"
              :ripple="false"
              class="black--text px-3 py-2 mr-2"
              large
              :color="hover ? '#495762' : '#3e4a53'"
              @click="dialog = false"
            >
              <span
                :class="hover ? 'teal--text text--accent-3' : 'teal--text'"
                class="text-uppercase"
                >Cancel</span
              >
            </v-card>
          </v-hover>

          <v-hover v-slot="{ hover }">
            <v-card
              elevation="1"
              style="cursor: pointer"
              :ripple="false"
              class="black--text px-3 py-2"
              large
              :color="hover ? '#5ecc9f' : '#46b692'"
              @click="deleteChat()"
            >
              <span class="text-uppercase">Delete chat</span>
            </v-card>
          </v-hover>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'ListDropdown',
    props: {
      chatId: {
        type: [String, Number],
        default: null,
      },
      chatContact: {
        type: String,
        default: '',
      },
    },
    data: () => ({
      menuItems: [
        { title: 'Archive chat', action: '' },
        { title: 'Mute notifications', action: '' },
        { title: 'Delete chat', action: 'deleteChatDialog' },
        { title: 'Pin chat', action: '' },
        { title: 'Mark as unread', action: '' },
      ],
      dialog: false,
    }),

    methods: {
      triggerAction(action) {
        this[action]();
      },

      deleteChatDialog() {
        this.dialog = true;
      },

      deleteChat() {
        this.$emit('deleteChat', this.chatId);
        this.dialog = false;
      },
    },
  };
</script>
<style>
  .dialog-text-color {
    color: #d2d7db;
  }

  .active-contact-menu-hover:not(.active-contact):hover {
    background-color: #1a2228 !important;
  }
</style>
