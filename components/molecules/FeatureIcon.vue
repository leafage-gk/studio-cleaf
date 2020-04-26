<template>
  <svg-image aspect-ratio="1" :src="icon" class="align-center text-center">
    <p
      :class="{
        'white--text': true,
        'mb-0': true,
        headline: !sm,
        title: sm,
      }"
    >
      {{ caption }}
    </p>
  </svg-image>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { useBreakpoint } from '../../hooks';

export default defineComponent({
  components: {
    SvgImage: () => import('~/components/atoms/SvgImage.vue'),
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
  },
  setup(_, ctx) {
    const { sm } = useBreakpoint(ctx, ['sm']);
    return {
      sm,
    };
  },
});
</script>
