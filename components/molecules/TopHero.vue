<template>
  <hero-image
    :src1x="hero1x"
    :src2x="hero2x"
    with-aspect-ratio
    :natural-width="960"
    :natural-height="388"
    :aspect-ratio="xs ? 16 / 9 : 16 / 5"
  >
    <v-overlay absolute class="overlay" />
    <v-row justify="center" align="center">
      <v-spacer />
      <v-col cols="12" sm="8" md="6" lg="5" xl="4">
        <v-card class="catch py-3" tile flat color="transparent" width="100%">
          <v-card-title
            :class="{
              'justify-center': true,
              'white--text': true,
              'display-1': !xs,
              title: xs,
              'ma-1': true,
            }"
          >
            Webを通じたお手伝い
          </v-card-title>
          <v-card-subtitle
            :class="{
              'text-center': true,
              'white--text': true,
              'subtitle-1': !xs,
              caption: xs,
              'font-weight-regular': true,
            }"
          >
            ホームページ・LP制作ならSTUDIO CLEAF
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-spacer />
    </v-row>
  </hero-image>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import hero1x from '~/assets/images/top/hero.jpg';
import hero2x from '~/assets/images/top/hero@2x.jpg';
import { useBreakpoint } from '~/hooks';

export default defineComponent({
  components: {
    HeroImage: () => import('~/components/atoms/HeroImage.vue'),
  },
  setup(_, ctx) {
    const { xs } = useBreakpoint(ctx, ['xs']);
    return {
      xs,
      hero1x,
      hero2x,
    };
  },
});
</script>

<style lang="scss" scoped>
.catch {
  z-index: 7;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(0, 0, 0, 0.3);
    border: thin solid map-get($grey, lighten-1);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
  }
}
</style>
