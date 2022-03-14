<template>
  <v-navigation-drawer
    permanent
    app
    width="450"
    color="rgb(17,27,33)"
    class="border-drawer"
  >
    <!-- using the #append slot, we can make sure that the contact list scrolls on overflow-y
    while the top icons and search field are in a fixed possition -->
    <template #prepend>
      <v-app-bar color="rgb(32,44,51)">
        <!-- default user avatar SVG -->
        <default-user-avatar
          style="cursor: pointer"
          @click="profileDrawer = !profileDrawer"
        />

        <v-spacer />

        <v-icon
          v-for="(icon, i) in icons"
          :key="'icon' + i"
          v-blur
          :title="icon.title"
          class="mx-3 pa-1"
          color="#B0BAC0"
          @click="triggerFunction(icon.action)"
        >
          {{ icon.name }}
        </v-icon>
      </v-app-bar>

      <v-alert
        v-model="alert"
        class="px-3 py-0 ma-0"
        dark
        prominent
        color="#182229"
      >
        <template #prepend>
          <div class="pl-2" />
          <v-avatar color="#E06670">
            <v-icon class="ml-1" color="black">
              mdi-battery-alert-variant-outline
            </v-icon>
          </v-avatar>
        </template>
        <template #append>
          <div class="pl-2" />
          <div @click="alert = false">
            <v-icon color="#89969f" style="cursor: pointer"> mdi-close </v-icon>
          </div>
        </template>
        <v-card-title style="font-size: 120% !important" class="text-h5">
          Phone battery low
        </v-card-title>
        <v-card-subtitle class="subtitle-color">
          Charge your pohone to keep using WhatsApp
        </v-card-subtitle>
      </v-alert>

      <search-field
        :search.sync="search"
        :no-records="!filteredChats.length"
        :focus.sync="searchFocus"
        :loading="loading"
      />
    </template>

    <search-status :loading="loading" :no-records="!filteredChats.length" />

    <v-list class="mt-0 pt-0">
      <v-list-item-group
        mandatory
        color="transparent"
        active-class="active-contact"
      >
        <template v-for="(chat, i) in filteredChats">
          <v-divider :key="'d' + i" style="background: rgb(32, 44, 51)" />
          <v-hover :key="'h' + i" v-slot="{ hover }">
            <chat-list
              :hover="hover"
              :chat="chat"
              @deleteChat="deleteChat"
              @clearUnreadMessages="clearUnreadMessages"
            />
          </v-hover>
        </template>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Getting appbar icons, chat messages and fake data generator function
  // from an external JS file.
  import { sync } from 'vuex-pathify';
  import icons from './Elements/Data/icons';
  import { chats, generateNewChats } from './Elements/Data/chats';

  // Importing components for reusabikity, code spliting and cleaner single file component.
  // from an external JS file.
  import ChatList from './Elements/ChatList.vue';
  import SearchStatus from './Elements/SearchStatus.vue';
  import SearchField from './Elements/SearchField.vue';
  import DefaultUserAvatar from '@/components/app/DefaultUserAvatar.vue';

  export default {
    // Always define a component name, easier to find in the Vue developer tools extension.
    // Needed to auto-import components using the polugging app.js script. (@/pluggins/app.js)
    name: 'DefaultDrawer',
    // Declaring imported copmponents so they can be used in the template code.
    components: {
      ChatList,
      SearchStatus,
      SearchField,
      DefaultUserAvatar,
    },
    data() {
      return {
        chats,
        icons,
        search: '',
        searchFocus: false,
        loading: false,
        alert: true,
      };
    },

    computed: {
      ...sync('head', ['profileDrawer']),
      // Changes the chats array items based on the search input value.
      filteredChats() {
        // Tansforms search input to case-insensitive (no uppercase nor lowercsae).
        const searchValue = this.search.toString().toLowerCase();

        // Filters the array to only show items that matches either contact or message
        // matching characters.
        return this.chats.filter(
          (chat) =>
            chat.contact.toLowerCase().match(searchValue) ||
            chat.message.toLowerCase().match(searchValue),
        );
      },
    },

    mounted() {
      // Generates 5 new chats on first render
      // Change this number if you want increase/decrease,
      generateNewChats(5, this.chats);
    },

    methods: {
      triggerFunction(fn) {
        // Triggers a dynamic function defined in the icon action key value.
        // i.e will conver fn string paramter from 'addChat' to this.addChat()
        this[fn]();
      },

      addChat() {
        // Adds a new rabdom chat record, the first parameter is the number of chats being added.
        generateNewChats(1, this.chats);
      },

      deleteChat(chatId) {
        // Completely removes the chat message from the chats array
        // by re-creating the chats array excluding the removed chat message.
        this.chats = this.chats.filter((chat) => chat.id !== chatId);
      },

      clearUnreadMessages(id) {
        // Remove the unread chat badge icon by clearing (setting valöue to 0) the unread messages number.
        this.chats.find((chat) => chat.id === id).unreadMessages = 0;
      },
    },
  };
</script>

<style>
  .border-drawer {
    border-right: solid 2px rgb(38, 60, 66) !important;
  }

  .active-contact {
    background: #2a3942;
  }

  .active-contact-hover:not(.active-contact):hover {
    background-color: #202c33 !important;
  }

  .subtitle-color {
    color: #89969f !important;
  }

  .v-badge__badge {
    color: #000;
  }

  .rotate {
    transform: rotate(90deg);
    transition: transform 330ms ease-in-out;
  }
</style>
