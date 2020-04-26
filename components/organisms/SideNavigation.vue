<template>
  <v-list dense nav>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      :to="item.to"
      router
      exact
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { useNavigationItems } from '~/hooks';

export default defineComponent({
  setup() {
    const items = useNavigationItems();
    return {
      items,
    };
  },
});
</script>
