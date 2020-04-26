<template>
  <v-content>
    <page-hero :src1x="hero1x" :src2x="hero2x" caption="Contact" />
  </v-content>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import hero1x from '~/assets/images/contact/hero.jpg';
import hero2x from '~/assets/images/contact/hero@2x.jpg';

export default defineComponent({
  components: {
    PageHero: () => import('~/components/molecules/PageHero.vue'),
  },
  setup() {
    return {
      hero1x,
      hero2x,
    };
  },
});
</script>
