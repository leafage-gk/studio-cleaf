<template>
  <section class="text-center">
    <div class="ma-3 svg-icon">
      <slot name="icon" />
    </div>
    <h2
      :class="{
        headline: !xs,
        title: xs,
        'light-blue--text': true,
      }"
    >
      {{ title }}
    </h2>
    <div class="my-5 summary">
      <h3
        :class="{
          title: !xs,
          'subtitle-1': xs,
          'light-blue--text': true,
          'px-3': true,
        }"
      >
        {{ summary }}
      </h3>
    </div>
    <p class="text-left ma-5"><slot /></p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { useBreakpoint } from '~/hooks';
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
  },
  setup(_, ctx) {
    const { xs } = useBreakpoint(ctx, ['xs']);
    return {
      xs,
    };
  },
});
</script>

<style lang="scss" scoped>
.summary {
  display: inline-block;
  border-bottom: thin solid map-get($light-blue, base);
}
.svg-icon {
  fill: map-get($light-blue, darken-2);
}
</style>
