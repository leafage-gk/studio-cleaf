<template>
  <hero-image
    :src1x="src1x"
    :src2x="src2x"
    :height="200"
    :natural-width="960"
    :natural-height="192"
    :with-aspect-ratio="xs"
  >
    <v-overlay absolute>
      <v-row align="center" justify="center">
        <h1
          :class="{
            'mt-5': !xs,
            'display-3': !xs,
            'display-1': xs,
            'font-weight-medium': true,
          }"
        >
          {{ caption }}
        </h1>
      </v-row>
    </v-overlay>
  </hero-image>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { useBreakpoint } from '~/hooks';

export default defineComponent({
  components: {
    HeroImage: () => import('~/components/atoms/HeroImage.vue'),
  },
  props: {
    src1x: {
      type: String,
      required: true,
    },
    src2x: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
  },
  setup(_, ctx) {
    const { xs } = useBreakpoint(ctx);
    return {
      xs,
    };
  },
});
</script>
