<template>
  <span>
    <v-icon v-for="(icon, i) in icons" :key="'icon' + i" class="mr-1" v-bind="{ ...icon.props }">
      {{ icon.name }}</v-icon
    >
    {{ generateMessage() }}
  </span>
</template>

<script>
  import { random } from 'lodash';
  export default {
    name: 'ChatStatusIcons',

    props: {
      status: {
        type: Object,
        default: () => {},
      },
      message: {
        type: String,
        default: () => '',
      },
    },

    computed: {
      icons() {
        return this.generateIcons();
      },
    },

    methods: {
      generateIcons() {
        let icons = [];
        let s = this.status;

        if (this.isDeliveredRead(s)) {
          icons.push({ name: 'mdi-check-all', props: { size: 20, color: '#53bdeb' } });
        }

        if (this.isDeliveredUnread(s)) {
          icons.push({ name: 'mdi-check-all', props: { size: 20, color: '#89969F' } });
        }

        if (this.isImage(s)) {
          icons.push({ name: 'mdi-camera', props: { size: 19, color: '#89969F' } });
        }

        if (this.isMissedCall(s)) {
          icons.push({ name: 'mdi-phone-missed', props: { size: 20, color: '#E06670' } });
        }

        if (this.isVoiceMessage(s)) {
          icons.push({ name: 'mdi-microphone', props: { size: 20, color: '#60CF6E' } });
        }

        if (this.isNotDelivered(s)) {
          icons.push({ name: 'mdi-check', props: { size: 20, color: '#89969F' } });
        }

        return icons;
      },

      generateRandomTime() {
        return `${random(0, 3)}: ${random(1, 59)}`;
      },

      //Shows a custom message based on the type of chat.
      generateMessage() {
        let s = this.status;

        if (this.isImageOnly(s)) {
          return 'Photo';
        } else if (this.isMissedCall(s)) {
          return 'Missed voice call';
        } else if (this.isVoiceMessage(s)) {
          return this.generateRandomTime();
        } else {
          return this.message;
        }
      },

      isDeliveredRead({ isRead, isInbound }) {
        return isRead && !isInbound;
      },

      isDeliveredUnread({ isDelivered, isInbound, isRead }) {
        return isDelivered && !isRead && !isInbound;
      },
      isNotDelivered({ isDelivered, isInbound, isRead }) {
        return !isDelivered && !isRead && !isInbound;
      },

      isVoiceMessage({ isVoiceMessage, isInbound }) {
        return isVoiceMessage && isInbound;
      },

      isMissedCall({ isMissedCall, isInbound }) {
        return isMissedCall && isInbound;
      },
      isImageOnly({ isImageOnly }) {
        return isImageOnly;
      },
      isImage({ isImageOnly, isImageAndText }) {
        return isImageOnly || isImageAndText;
      },
    },
  };
</script>
