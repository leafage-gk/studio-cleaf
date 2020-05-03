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
            2020年1月より一時休止しておりましたが
          </p>
          <p>ホームページ開設に伴い、2020年4月より復帰いたしました。</p>
          <p>
            また、ココナラ・SKIMAにおきましても同様に新規の受付を再開いたします。
          </p>
          <p>今後ともよろしくお願いいたします。</p>
        </section>
        <v-row justify="center" align="center">
          <v-col
            cols="10"
            lg="8"
            xl="6"
            class="text-center border-section mt-5 mb-10 pt-4 pb-0"
          >
            <p>※納品まで約1～2週間前後いただいております。</p>
            <p>
              ご依頼内容やスケジュールにより、納期と価格が変動いたしますので予めご了承ください。
            </p>
          </v-col>
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
        <v-row justify="center" align="center">
          <v-col cols="12" lg="8" xl="6" class="my-5">
            <h3
              :class="{
                'orange--text': true,
                'text-center': true,
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
              <a href="https://leafage.co.jp" target="_blank" class="link">
                Webのことならシステム・アプリ構築に強い当社へお気軽にご相談ください。
              </a>
            </v-subheader>
          </v-col>
        </v-row>
      </section>
      <section class="my-12 text-center">
        <p>
          CLEAF（くりいふ）の由来は創造するという意味の「create」とリーフエイジの「leafage」を組み合わせた造語です。
        </p>
        <p>
          元々は創作活動をする人をホームページ制作を通じて応援したい！という思いで立ちあげたサービスです。
        </p>
      </section>
      <section class="my-12 text-center">
        <p>
          当サービスはホームページ制作におけるウェブデザイン・コーディングをメインに行っております。
        </p>
        <p>少人数での運営のため対応できる業務に範囲がございます。</p>
        <p>
          誠に申し訳ございませんが、下記の業務は行っておりませんのでご了承ください。
        </p>
      </section>
      <section class="my-12">
        <v-row justify="center" align="center">
          <v-col cols="12" md="10" lg="8" xl="6" class="pa-10 border-caution">
            <ul>
              <li>当サービス以外で制作されたサイトに関してのお問い合わせ</li>
              <li>チラシやグッズなどの印刷物の入稿データ制作</li>
              <li>ブログやオウンドメディアなどの記事の執筆</li>
              <li>必要素材の手配における写真動画撮影、取材等</li>
              <li>
                更新頻度、コンテンツ量、ページ数などが極端に多いサイトの制作
              </li>
              <li>
                その他、コンテンツの審査及び対応範囲を超えお受けできないと判断したもの
              </li>
            </ul>
          </v-col>
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
  head() {
    return {
      title: 'ホームページ・LP制作ならSTUDIO CLEAF',
    };
  },
});
</script>

<style lang="scss" scoped>
.border-section {
  border: thin solid map-get($light-blue, base);
}
.border-caution {
  border: thin solid map-get($orange, base);
}
.wordwrap {
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-spacing: -1em;
  span {
    display: inline-block;
  }
}
.link {
  text-decoration: none;
  outline: 0;
}
</style>
