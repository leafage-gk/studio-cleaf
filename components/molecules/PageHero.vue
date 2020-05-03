<template>
  <hero-image align="center" :srcs="srcs" :height="200" :with-aspect-ratio="xs">
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
import { defineComponent, PropType } from '@vue/composition-api';

import { useBreakpoint } from '~/hooks';
import { ResponsiveImageSrcs } from '~/hooks/images';

export default defineComponent({
  components: {
    HeroImage: () => import('~/components/atoms/HeroImage.vue'),
  },
  props: {
    srcs: {
      type: Object as PropType<ResponsiveImageSrcs>,
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
