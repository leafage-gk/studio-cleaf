<template>
  <v-content>
    <top-hero />
    <v-container>
      <section class="my-12">
        <h2 class="headline text-center pa-2">お知らせ</h2>
        <v-divider />
        <section :class="{ 'text-center': !xs, 'ma-5': true }">
          <p>平素、STUDIO CLEAFをご愛顧いただきありがとうございます。</p>
          <p>
            2020年1月より一時休止停止しておりました新規制作依頼の受付について
          </p>
          <p>ホームページ開設に伴い、2020年4月より再開いいたしました。</p>
          <p>
            また、ココナラ・SKIMAにおきましても同様に新規の受付を再開いたします。
          </p>
          <p>今後ともよろしくお願いいたします。</p>
        </section>
        <v-row justify="center" align="center">
          <v-spacer />
          <v-col
            cols="10"
            lg="8"
            xl="6"
            class="text-center border-section mt-5 mb-10 pt-4 pb-0"
          >
            <p>※納品まで土日祝を除く10日前後いただいております。</p>
            <p>
              ご依頼内容やスケジュールにより変動いたしますので予めご了承ください。
            </p>
          </v-col>
          <v-spacer />
        </v-row>
        <v-divider />
      </section>
      <section class="my-12">
        <h2 class="headline text-center py-12">STUDIO CLEAFについて</h2>
        <v-row :justify="xs ? 'center' : 'space-between'" align="center">
          <v-col
            cols="8"
            sm="4"
            md="3"
            v-for="(a, index) in abouts"
            :key="index"
          >
            <feature-icon :icon="a.icon" :caption="a.caption" />
          </v-col>
        </v-row>
        <v-row>
          <v-spacer />
          <v-col cols="12" lg="8" xl="6" class="my-5">
            <h3
              :class="{
                'orange--text': true,
                'px-3': true,
                title: !xs,
                'subtitle-1': xs,
                wordwrap: true,
              }"
            >
              <span>当サービスはリーフエイジ</span>
              <span>合同会社</span>
              <span>の</span>
              <span>ホームページ制作部門です。</span>
            </h3>
            <v-divider class="orange" />
            <v-subheader class="justify-center black--text mt-3">
              Webのことならシステム・アプリ構築に強い当社へお気軽にご相談ください。
            </v-subheader>
          </v-col>
          <v-spacer />
        </v-row>
      </section>
    </v-container>
  </v-content>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import comicIcom from '~/assets/images/top/comic.svg?data';
import walletIcon from '~/assets/images/top/wallet.svg?data';
import windowIcon from '~/assets/images/top/window.svg?data';
import { useBreakpoint } from '~/hooks';

export default defineComponent({
  components: {
    FeatureIcon: () => import('~/components/molecules/FeatureIcon.vue'),
    TopHero: () => import('~/components/molecules/TopHero.vue'),
  },
  setup(_, ctx) {
    const { xs } = useBreakpoint(ctx, ['xs']);
    return {
      xs,
      abouts: [
        { icon: walletIcon, caption: '制作料金が安い' },
        { icon: windowIcon, caption: '少数ページ対応' },
        { icon: comicIcom, caption: '創作系サイトOK' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.border-section {
  border: thin solid map-get($light-blue, base);
}
.wordwrap {
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-spacing: -1em;
  span {
    display: inline-block;
  }
}
</style>
