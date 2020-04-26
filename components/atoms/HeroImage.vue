<template>
  <v-img
    class="align-center"
    :aspect-ratio="withAspectRatio ? aspectRatio : undefined"
    :height="!withAspectRatio ? height : undefined"
    :src="src"
    :srcset="srcset"
    :sizes="sizes"
  >
    <slot />
  </v-img>
</template>
<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

import { useBreakpoint } from '~/hooks';

export default defineComponent({
  props: {
    src1x: {
      type: String,
      required: true,
    },
    src2x: {
      type: String,
      required: true,
    },
    naturalWidth: {
      type: Number,
      required: true,
    },
    naturalHeight: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      default: 300,
    },
    withAspectRatio: {
      type: Boolean,
      default: false,
    },
    aspectRatio: {
      type: Number,
      default: 16 / 5,
    },
  },
  setup(props, ctx) {
    const { width } = useBreakpoint(ctx, ['width']);
    const naturalAspectRatio = props.naturalWidth / props.naturalHeight;
    const src = computed(() => props.src1x);
    const srcset = computed(
      () =>
        // eslint-disable-next-line prettier/prettier
        `${props.src1x} ${props.naturalWidth}w, ${props.src2x} ${props.naturalWidth * 2}w`,
    );
    const sizes = computed(() => {
      const percent = 100 * naturalAspectRatio;
      const vw = props.withAspectRatio
        ? Math.round(percent / props.aspectRatio)
        : Math.round(percent / (width.value / props.height));
      return (vw < 100 ? 100 : vw) + 'vw';
    });
    return {
      sizes,
      src,
      srcset,
    };
  },
});
</script>
