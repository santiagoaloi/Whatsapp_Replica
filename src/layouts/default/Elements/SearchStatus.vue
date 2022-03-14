<template>
  <div v-if="statusMessage" class="pa-10 mt-8 d-flex flex-column align-center subtitle-color">
    <small> {{ statusMessage }}</small>
  </div>
</template>

<script>
  export default {
    name: 'SearchStatus',
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
      noRecords: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      statusMessage() {
        if (this.noRecords && !this.loading) {
          return 'No chats, contacts or messages found.';
        }

        if (this.noRecords && this.loading) {
          return 'Looking for chats, contacts or messages...';
        }
        return null;
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
