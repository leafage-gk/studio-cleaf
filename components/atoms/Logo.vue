<template>
  <v-toolbar-title>
    <nuxt-link to="/" class="link">
      <v-img
        :src="logo"
        :srcset="logoSet"
        max-width="60%"
        :alt="title"
        class="mx-auto"
        eager
      />
    </nuxt-link>
  </v-toolbar-title>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import logo1x from '~/assets/images/logo/logo.png';
import logo2x from '~/assets/images/logo/logo@2x.png';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      logo: logo1x,
      logoSet: `${logo1x} 1x, ${logo2x} 2x`,
    };
  },
});
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  outline: 0;
}
</style>
