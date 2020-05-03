<template>
  <v-row class="my-12">
    <v-col cols="12" md="4" :order="mdAndUp ? (right ? 3 : 1) : 1">
      <v-img :src="src" :aspect-ratio="600 / 400" />
    </v-col>
    <v-col order="2" class="pa-8">
      <v-card tile flat>
        <v-card-title
          :class="{
            headline: mdAndUp,
            title: !mdAndUp,
            'font-weight-medium': true,
          }"
        >
          {{ title }}
        </v-card-title>
        <v-card-text :class="mdAndUp ? 'title' : 'subtitle-1'">
          <slot />
        </v-card-text>
        <v-card-text>
          <v-chip
            color="orange"
            small
            outlined
            class="ma-1"
            v-for="tag in tags"
            :key="tag"
          >
            {{ tag }}
          </v-chip>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

import { useBreakpoint } from '~/hooks';

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    right: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: Array as PropType<string[]>,
      default: () => [] as string[],
    },
  },
  setup(_, ctx) {
    const { mdAndUp } = useBreakpoint(ctx, ['mdAndUp']);
    return {
      mdAndUp,
    };
  },
});
</script>
