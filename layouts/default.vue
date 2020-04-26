<template>
  <v-app>
    <client-only>
      <header-bar v-model="drawer" />
      <header-navigation class="header-navigation" v-if="!isMobile" />
      <v-navigation-drawer
        v-model="drawer"
        fixed
        app
        v-if="isMobile"
        width="192"
        right
      >
        <side-navigation />
      </v-navigation-drawer>
    </client-only>
    <nuxt />
    <footer-bar :title="title" />
  </v-app>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api';

import { build, useMobile } from '~/hooks';

export default defineComponent({
  components: {
    FooterBar: () => import('~/components/organisms/FooterBar.vue'),
    HeaderBar: () => import('~/components/organisms/HeaderBar.vue'),
    // eslint-disable-next-line prettier/prettier
    HeaderNavigation: () => import('~/components/organisms/HeaderNavigation.vue'),
    SideNavigation: () => import('~/components/organisms/SideNavigation.vue'),
  },
  setup(_, ctx) {
    const {
      settings: { title },
    } = build();
    const { isMobile } = useMobile(ctx);
    const state = reactive({
      drawer: false,
    });
    return {
      ...toRefs(state),
      title,
      isMobile,
    };
  },
});
</script>

<style lang="scss" scoped>
.header-navigation {
  position: fixed;
  top: 64px;
  left: 0;
  z-index: 100;
}
</style>
