<template>
  <v-content>
    <page-hero :srcs="hero" caption="Flow" />
    <v-container>
      <section class="my-12">
        <h2 class="headline text-center pa-2">制作フローについて</h2>
        <v-divider />
      </section>
      <section class="my-12">
        <v-row justify="center" align="center" class="mb-12">
          <flow-array />
        </v-row>
        <v-row justify="center" align="start">
          <v-col cols="10" md="5" xl="4">
            <flow-item
              title="①お問い合わせ"
              summary="フォームにて概要や納期をお知らせください"
            >
              <template v-slot:icon>
                <email-icon width="100" height="100" />
              </template>
              内容確認後、さらに具体的なイメージやサイトの目的をお伺いするためヒアリングシートを送付いたします。以降、メールやチャットツールを用いた打ち合わせが可能です。
              趣味サイト、特に二次創作系同人サイトの場合コンテンツの審査をさせていただきます。
            </flow-item>
          </v-col>
          <v-col cols="10" md="5" xl="4">
            <flow-item
              title="②お見積り"
              summary="注文内容やオプションを決めます"
            >
              <template v-slot:icon>
                <comment-icon width="100" height="100" />
              </template>
              ヒアリングシートの内容をもとに基本料金とオプションで一度制作料金をお見積もりいたします。
              制作指示やページ構成案等完成イメージが分かる資料がありますとスムーズに制作に入ることができます。
              内容はある程度ご確定いた上でご依頼ください。
            </flow-item>
          </v-col>
        </v-row>
        <v-row justify="center" align="start">
          <v-col cols="10" md="5" xl="4">
            <flow-item
              title="③ご入金"
              summary="指定の期日以内にお支払いください"
            >
              <template v-slot:icon>
                <yen-icon width="100" height="100" />
              </template>
              コンテンツ量が決まり次第正式な制作料金が決定します。
              デザイン時のコンテンツ量で金額が決定いたします。
              1P追加ごとに、追加料金をいただきます。
              この段階より、注文の中止やキャンセルは原則不可です。
            </flow-item>
          </v-col>
          <v-col cols="10" md="5" xl="4">
            <flow-item title="④制作" summary="納期は通常約1～2週間前後です">
              <template v-slot:icon>
                <display-icon width="100" height="100" />
              </template>
              オプション無し、基本対応のみの場合は通常納期でご対応いたします。
              ご注文状況やスケジュールにより長く制作時間をいただく場合がございますのであらかじめご了承ください。
              各工程で何度か方向性のすり合わせのため打ち合わせにご協力ください。
            </flow-item>
          </v-col>
        </v-row>
        <v-row justify="center" align="start">
          <v-col cols="10" md="5" xl="4">
            <flow-item title="⑤ご確認" summary="納品前の修正は無制限です">
              <template v-slot:icon>
                <check-icon width="100" height="100" />
              </template>
              デザインの場合は画像データにて、コーディングを伴う場合はお客様のブラウザ環境で動作確認をお願いしております。
              指定の期日以内にご確認ください。
              大幅なコンテンツの変更や内容追加をご希望される場合は追加料金をいただきます。
            </flow-item>
          </v-col>
          <v-col cols="10" md="5" xl="4">
            <flow-item title="⑥納品" summary="問題がなければ納品といたします">
              <template v-slot:icon>
                <zip-icon width="100" height="100" />
              </template>
              画像データ（jpg等）、デザインデータ（ai・psd等）、HTMLデータで納品いたします。
              ご希望の納品方法があればご連絡ください。
              納品後に修正や改修の対応を希望される場合は別料金をいただきます。
            </flow-item>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </v-content>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import hero from '~/hooks/images/flow/hero';

export default defineComponent({
  components: {
    FlowItem: () => import('~/components/molecules/FlowItem.vue'),
    FlowArray: () => import('~/components/molecules/FlowArray.vue'),
    PageHero: () => import('~/components/molecules/PageHero.vue'),
    EmailIcon: () => import('~/assets/images/flow/email.svg?inline'),
    CommentIcon: () => import('~/assets/images/flow/comment.svg?inline'),
    YenIcon: () => import('~/assets/images/flow/yen.svg?inline'),
    DisplayIcon: () => import('~/assets/images/flow/display.svg?inline'),
    CheckIcon: () => import('~/assets/images/flow/check.svg?inline'),
    ZipIcon: () => import('~/assets/images/flow/zip.svg?inline'),
  },
  setup() {
    return {
      hero,
    };
  },
  head() {
    return {
      title: '制作フローについて',
    };
  },
});
</script>
