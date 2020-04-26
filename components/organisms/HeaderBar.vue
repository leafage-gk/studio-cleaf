<template>
  <v-app-bar color="white" fixed :flat="!isMobile" elevate-on-scroll app>
    <v-spacer />
    <logo :title="title" />
    <v-spacer />
    <toolbar-nav-icon @click="onClickNavIcon" v-if="isMobile" />
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api';

import { settingsKeys, useMobile } from '~/hooks';

export default defineComponent({
  components: {
    Logo: () => import('~/components/atoms/Logo.vue'),
    ToolbarNavIcon: () => import('~/components/atoms/ToolbarNavIcon.vue'),
  },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  setup(props, ctx) {
    const title = inject(settingsKeys.title, '');
    const { isMobile } = useMobile(ctx);
    const onClickNavIcon = () => {
      ctx.emit('input', !props.value);
    };
    return {
      onClickNavIcon,
      title,
      isMobile,
    };
  },
});
</script>
