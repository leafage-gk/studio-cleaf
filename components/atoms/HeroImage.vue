<template>
  <client-only>
    <template>
      <v-img
        :class="{ [`align-${align}`]: true }"
        :aspect-ratio="withAspectRatio ? aspectRatio : undefined"
        :height="!withAspectRatio ? height : undefined"
        :src="src"
        :srcset="srcset"
        :sizes="sizes"
      >
        <slot />
      </v-img>
    </template>
    <template v-slot:placeholder>
      <slot />
    </template>
  </client-only>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api';

import { useBreakpoint } from '~/hooks';
import { ResponsiveImageSrcs } from '~/hooks/images';

export default defineComponent({
  props: {
    align: {
      type: String,
      required: true,
    },
    srcs: {
      type: Object as PropType<ResponsiveImageSrcs>,
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
    const src = computed(() => props.srcs.src600w);
    const srcset = computed(() =>
      [
        `${props.srcs.src600w} 600w`,
        `${props.srcs.src960w} 960w`,
        `${props.srcs.src1280w} 1280w`,
        `${props.srcs.src1920w} 1920w`,
      ].join(', '),
    );
    const sizes = computed(() => {
      const percent = 100 * props.srcs.aspectRatio;
      const vw = props.withAspectRatio
        ? Math.round(percent / props.aspectRatio)
        : Math.round(percent / (width.value / props.height));
      return (vw < 100 ? 100 : vw) + 'vw';
    });
    return {
      src,
      srcset,
      sizes,
    };
  },
});
</script>
