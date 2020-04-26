<template>
  <v-tabs centered grow background-color="rgba(0, 0, 0, 0.7)" dark height="32">
    <v-tab v-for="(item, index) in items" :key="index" exact :to="item.to">
      {{ item.title }}
    </v-tab>
  </v-tabs>
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
