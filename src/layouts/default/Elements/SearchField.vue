<template>
  <v-card flat height="auto" color="transparent" class="mx-3 pa-0">
    <v-text-field
      v-model="search"
      v-escape-blur
      title="Search input textbox"
      flat
      color="#89969f"
      background-color="rgb(32,44,51)"
      class="my-2 rounded-lg mx-0"
      dense
      dark
      :placeholder="!focus ? 'Search or start new chat' : ''"
      solo
      hide-details
      @blur="$emit('update:focus', false)"
      @mousedown.self="$emit('update:focus', true)"
      @keydown.esc="$emit('update:search', '')"
      @keyup="$emit('update:search', search)"
    >
      <template #prepend-inner>
        <v-icon
          style="cursor: pointer"
          :class="{ rotate: focus || noRecords }"
          size="25"
          :color="!focus && !noRecords ? '#89969f' : 'teal lighten-1'"
          class="ml-2 mr-6"
          @mousedown="
            $emit('update:focus', !focus);
            $emit('update:search', '');
          "
        >
          {{ !focus && !noRecords ? 'mdi-magnify' : 'mdi-arrow-down' }}
        </v-icon>
      </template>

      <template #append>
        <v-btn
          v-if="loading && search"
          color="teal"
          icon
          :loading="loading"
          @click.stop
        >
        </v-btn>
        <v-fab-transition hide-on-leave>
          <v-icon
            v-if="search && !loading"
            style="cursor: pointer"
            color="#89969f"
            size="20"
            @mousedown.self="
              $emit('update:search', '');
              $emit('update:focus', false);
            "
          >
            mdi-close
          </v-icon>
        </v-fab-transition>
      </template>
    </v-text-field>
  </v-card>
</template>

<script>
  export default {
    name: 'SearchStatus',
    props: {
      search: {
        type: String,
        default: '',
      },
      focus: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false,
      },
      noRecords: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
