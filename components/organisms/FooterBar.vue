<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="white--text text-center">
      <v-card-text class="grey white--text pa-2">
        <p class="ma-0 caption">
          <a href="https://leafage.co.jp" target="_blank" class="white--text">
            運営会社
          </a>
          <!-- | プライバシーポリシー -->
        </p>
      </v-card-text>
      <v-card-text class="black white--text pa-2 overline">
        <p class="ma-0">&copy; {{ new Date().getFullYear() }} {{ title }}</p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api';

import { settingsKeys } from '~/hooks';

export default defineComponent({
  setup() {
    const title = inject(settingsKeys.title, '');
    return {
      title,
    };
  },
});
</script>
