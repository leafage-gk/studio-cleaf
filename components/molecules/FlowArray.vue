<template>
  <v-col cols="6" sm="4" md="10" lg="8" xl="6">
    <v-row justify="center" align="center">
      <v-col
        v-for="(item, index) in items"
        :key="index"
        :cols="smAndDown ? 12 : undefined"
        :class="{
          'px-1': true,
          'pt-8': !smAndDown,
          'pt-10': smAndDown,
          'py-8': !smAndDown,
          'py-0': smAndDown,
          'white--text': true,
          'subtitle-1': true,
          'text-right': !smAndDown,
          'text-center': smAndDown,
          'flow-array': true,
          'right-array': !smAndDown,
          'bottom-array': smAndDown,
          [item.bg]: true,
        }"
      >
        {{ item.title }}
      </v-col>
    </v-row>
  </v-col>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import { useBreakpoint } from '~/hooks';

export default defineComponent({
  setup(_, ctx) {
    const { smAndDown } = useBreakpoint(ctx, ['smAndDown']);
    return {
      smAndDown,
      items: [
        { title: '①お問い合わせ', bg: 'lighten3' },
        { title: '②お見積り', bg: 'lighten2' },
        { title: '③ご入金', bg: 'lighten1' },
        { title: '④制作', bg: 'darken1' },
        { title: '⑤ご確認', bg: 'darken2' },
        { title: '⑥納品', bg: 'darken3' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@mixin right-array($color) {
  &::after {
    background: linear-gradient(
          to bottom left,
          rgba(255, 255, 255, 0) 50%,
          $color 50.5%
        )
        no-repeat top left/100% 50%,
      linear-gradient(to top left, rgba(255, 255, 255, 0) 50%, $color 50.5%)
        no-repeat bottom right/100% 50%;
  }
}

@mixin bottom-array($color) {
  &::after {
    background: linear-gradient(
          to top right,
          rgba(255, 255, 255, 0) 50%,
          $color 53%
        )
        no-repeat top left/50.2% 100%,
      linear-gradient(to top left, rgba(255, 255, 255, 0) 50%, $color 53%)
        no-repeat top right/50.2% 100%;
  }
}

.flow-array {
  &.lighten1 {
    background-color: map-get($light-blue, lighten-1);
  }
  &.lighten2 {
    background-color: map-get($light-blue, lighten-3);
  }
  &.lighten3 {
    background-color: map-get($light-blue, lighten-4);
  }
  &.darken1 {
    background-color: map-get($light-blue, darken-1);
  }
  &.darken2 {
    background-color: map-get($light-blue, darken-3);
  }
  &.darken3 {
    background-color: map-get($light-blue, darken-4);
  }
}

.right-array {
  position: relative;
  &.lighten1 {
    @include right-array(map-get($light-blue, lighten-1));
  }
  &.lighten2 {
    @include right-array(map-get($light-blue, lighten-3));
  }
  &.lighten3 {
    @include right-array(map-get($light-blue, lighten-4));
  }
  &.darken1 {
    @include right-array(map-get($light-blue, darken-1));
  }
  &.darken2 {
    @include right-array(map-get($light-blue, darken-3));
  }
  &.darken3 {
    @include right-array(map-get($light-blue, darken-4));
  }
  &::after {
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 1;
    width: 25%;
    height: 100%;
    content: '';
  }
}

.bottom-array {
  position: relative;
  &.lighten1 {
    @include bottom-array(map-get($light-blue, lighten-1));
  }
  &.lighten2 {
    @include bottom-array(map-get($light-blue, lighten-3));
  }
  &.lighten3 {
    @include bottom-array(map-get($light-blue, lighten-4));
  }
  &.darken1 {
    @include bottom-array(map-get($light-blue, darken-1));
  }
  &.darken2 {
    @include bottom-array(map-get($light-blue, darken-3));
  }
  &.darken3 {
    @include bottom-array(map-get($light-blue, darken-4));
  }
  &::after {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 40%;
    content: '';
  }
}
</style>
