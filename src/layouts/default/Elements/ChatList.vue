<template>
  <div>
    <v-divider :key="'d' + chat.id" style="background: rgb(32, 44, 51)" />
    <v-hover :key="'h' + chat.id" v-slot="{ hover }">
      <v-list-item
        v-if="chat"
        ref="listItem"
        class="disable-hover active-contact-hover"
        :ripple="false"
        @mousedown="onMouseDown()"
        @click="hideSplash()"
      >
        <v-list-item-avatar v-if="chat.avatar" size="55">
          <v-img
            :src="chat.avatar"
            lazy-src="https://picsum.photos/id/21/20/20"
          >
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-list-item-avatar>

        <v-list-item-avatar v-else size="50">
          <default-user-avatar />
        </v-list-item-avatar>

        <v-list-item-content class="white--text">
          <v-list-item-title :title="chat.contact"
            >{{ chat.contact }}
          </v-list-item-title>
          <v-list-item-subtitle :title="chat.message" class="subtitle-color">
            <chat-status-icons :message="chat.message" :status="chat.status" />
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-list-item-action-text
            class="mt-1"
            :class="
              showBadge() ? 'teal--text text--accent-4' : 'subtitle-color'
            "
            v-text="chat.timeStamp"
          />
          <div style="height: 34px" class="d-flex">
            <v-badge
              v-if="showBadge()"
              class="mt-3"
              inline
              :content="chat.unreadMessages"
              color="#00a884"
            />
            <v-slide-x-reverse-transition hide-on-leave>
              <list-dropdown
                v-show="hover"
                :chat-id="chat.id"
                :chat-contact="chat.contact"
                v-on="$listeners"
              />
            </v-slide-x-reverse-transition>
          </div>
        </v-list-item-action>
      </v-list-item>
    </v-hover>
  </div>
</template>

<script>
  import { sync } from 'vuex-pathify';
  import ListDropdown from './ListDropdown.vue';
  import ChatStatusIcons from './ChatStatusIcons.vue';

  export default {
    name: 'ChatList',
    components: { ListDropdown, ChatStatusIcons },

    props: {
      chat: {
        type: Object,
        default: () => {},
      },
      hover: {
        type: Boolean,
        default: () => {},
      },
    },

    methods: {
      hideSplash() {
        if (this.showSplash) {
          this.showSplash = false;
        }
      },

      showBadge() {
        return (
          this.chat.status.isInbound &&
          this.chat.unreadMessages &&
          !this.chat.status.isMissedCall &&
          !this.chat.status.isVoiceMessage
        );
      },

      onMouseDown() {
        this.$refs.listItem.toggle();
        this.$emit('clearUnreadMessages', this.chat.id);
      },
    },
    computed: {
      ...sync('head', ['showSplash']),
    },
  };
</script>
