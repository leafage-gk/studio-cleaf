<template>
  <v-content>
    <page-hero :srcs="hero" caption="Works" />
    <v-container>
      <section class="my-12">
        <h2 class="headline text-center pa-2">制作実績</h2>
        <v-divider />
      </section>
      <section class="my-12">
        <v-alert type="info" outlined>
          現在準備中です。
        </v-alert>
      </section>
    </v-container>
  </v-content>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import hero from '~/hooks/images/works/hero';

export default defineComponent({
  components: {
    PageHero: () => import('~/components/molecules/PageHero.vue'),
  },
  setup() {
    return {
      hero,
    };
  },
  head() {
    return {
      title: '制作実績',
    };
  },
});
</script>
