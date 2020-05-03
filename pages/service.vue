<template>
  <v-content>
    <page-hero :srcs="hero" caption="Service" />
    <v-container>
      <section class="my-12">
        <h2 class="headline text-center pa-2">サービス内容</h2>
        <v-divider />
      </section>
      <service-item
        :src="require('~/assets/images/service/homepage@600w.webp')"
        title="ホームページ制作"
        :tags="[
          'PCデザイン',
          'SPデザイン',
          'コーディング',
          'レスポンシブ対応',
          '修正数無制限',
        ]"
      >
        キャンペーンサイト、告知サイト、店舗サイト、採用サイト等、少数ページのホームページを制作いたします。既存サイトのリニューアルも承ります。
      </service-item>
      <service-item
        :src="require('~/assets/images/service/creative@600w.webp')"
        title="創作系サイト制作"
        :tags="[
          'PCデザイン',
          'SPデザイン',
          'コーディング',
          'レスポンシブ対応',
          '修正数無制限',
        ]"
        right
      >
        同人サイト、サークルサイト、趣味サイト等。ご自身で制作された創作物がメインであれば二次創作サイトでもOKです。
      </service-item>
      <service-item
        :src="require('~/assets/images/service/lp@600w.webp')"
        title="LP(ランディングページ)制作"
        :tags="[
          'PCデザイン',
          'SPデザイン',
          'コーディング',
          'レスポンシブ対応',
          '修正数無制限',
        ]"
      >
        新規のご制作、既存サイトリニューアルやホームページのLP化も行います。公開後の対応が必要な場合は事前にお知らせください。
      </service-item>
      <service-item
        :src="require('~/assets/images/service/webdesign@600w.webp')"
        title="Webデザイン"
        :tags="['PCデザイン', 'SPデザイン', '修正数無制限']"
        right
      >
        コーディングなしのデザインのみのご依頼も承ります。ご希望であれば後からコーディングを追加でご依頼することも可能です。
      </service-item>
    </v-container>
    <v-container fluid class="background">
      <v-row justify="center" align="center">
        <v-col
          cols="11"
          md="8"
          xl="6"
          class="text-center ma-8 pa-5 background-white"
        >
          <p>制作料金は基本料金＋オプション料金で決定いたします。</p>
          <p>
            基本料金のみでも制作可能ですが、1Pごとに追加料金をいただいております。
          </p>
          <p>
            基本対応にデザイン、コーディング、レスポンシブ対応が含まれます。
          </p>
          <p>
            いずれも制作中の修正回数は無制限、CMSを使用せずに制作するオリジナルページです。
          </p>
          <p>
            あらかじめワイヤー・掲載画像・文字原稿等をご用意いただけますと、スムーズに制作が進みます。
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <section class="my-12">
        <h2 class="headline text-center pa-2">オプションについて</h2>
        <v-divider />
      </section>
      <v-row justify="center" align="center" class="pa-5">
        <p>
          基本対応には含まれませんが、オプションとして追加料金をいただくことで対応可能な場合がございます。
        </p>
        <p>
          希望される場合、通常の納期よりお時間をいただくことがございますのであらかじめご了承ください。
        </p>
        <p>
          下記の例以外に対応いただきたいことがございましたら随時ご相談ください。
        </p>
      </v-row>
      <v-row justify="center" align="center" class="pa-5">
        <v-col cols="12" md="5" xl="4">
          <ul>
            <li>掲載文章作成(記事執筆を除く)</li>
            <li>掲載用画像取得代行（商用利用可サイトより取得）</li>
            <li>Javascript導入</li>
            <li>IE対応</li>
          </ul>
        </v-col>
        <v-col cols="12" md="5" xl="4">
          <ul>
            <li>制作後や公開後の修正対応</li>
            <li>ページ追加</li>
            <li>バナー制作</li>
            <li>他</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import hero from '~/hooks/images/service/hero';

export default defineComponent({
  components: {
    PageHero: () => import('~/components/molecules/PageHero.vue'),
    ServiceItem: () => import('~/components/molecules/ServiceItem.vue'),
  },
  setup() {
    return {
      hero,
    };
  },
  head() {
    return {
      title: 'サービス内容',
    };
  },
});
</script>

<style lang="scss" scoped>
.background {
  background-color: map-get($orange, lighten-3);
}
.background-white {
  background-color: white;
}
</style>
