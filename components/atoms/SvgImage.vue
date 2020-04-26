<template>
  <v-responsive
    :aspect-ratio="aspectRatio"
    class="svg-image"
    :style="{ backgroundImage: `url('${src}')` }"
  >
    <slot />
  </v-responsive>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

export default defineComponent({
  props: {
    aspectRatio: {
      type: [String, Number] as PropType<string | number | undefined>,
    },
    src: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.svg-image {
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% auto;
}
</style>
