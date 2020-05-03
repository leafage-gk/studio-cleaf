<template>
  <v-content>
    <page-hero :srcs="hero" caption="Contact" />
    <v-dialog v-model="dialog" width="800">
      <v-card>
        <form
          name="contact"
          action="/contact_thanks/"
          data-netlify="true"
          data-netlify-recaptcha="true"
          method="POST"
        >
          <v-card-title class="headline grey lighten-2" primary-title>
            お問合せ内容確認
          </v-card-title>
          <v-container fluid>
            <v-row v-for="(item, index) in contactList" :key="index">
              <v-col cols="5" md="4">
                <p class="font-weight-bold text-right">{{ item.label }}</p>
              </v-col>
              <v-col cols="7" md="8">{{ item.value }}</v-col>
            </v-row>
          </v-container>
          <v-divider />
          <v-card-text>
            <v-layout justify-center align-center>
              <vue-recaptcha :sitekey="recaptchaKey" @verify="verify" />
            </v-layout>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer />
            <input type="hidden" name="form-name" value="contact" />
            <input
              v-bind:key="item.name"
              v-for="item in contactList"
              type="hidden"
              :name="item.name"
              :value="item.value"
            />
            <input
              type="hidden"
              name="g-recaptcha-response"
              :value="recaptcha"
            />
            <v-btn :disabled="!verified" color="primary" text type="submit">
              送信
            </v-btn>
            <v-btn color="secondary" text @click="dialog = false">
              キャンセル
            </v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
    <v-container>
      <section class="my-12">
        <h2 class="text-center pa-5">ココナラ・SKIMAでもご依頼受付中！</h2>
        <p class="text-center">
          依頼内容によりそれぞれ商品内容が異なります。
        </p>
        <p class="text-center">
          サービス内容をよくお読みいただきご依頼ください。
        </p>
        <div class="text-center">
          <v-btn
            color="orange"
            outlined
            x-large
            class="ma-5"
            href="https://profile.coconala.com/users/1394722"
            target="_blank"
          >
            ココナラ
          </v-btn>
          <v-btn
            color="orange"
            outlined
            x-large
            class="ma-5"
            href="https://skima.jp/profile?id=86804"
            target="_blank"
          >
            SKIMA
          </v-btn>
        </div>
      </section>
      <section class="my-12">
        <h2 class="headline text-center pa-2">お問い合わせ</h2>
        <v-divider />
      </section>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row justify="center" align="center">
          <v-col cols="12" md="10" lg="8" xl="6">
            <v-select
              name="type"
              v-model="select"
              :items="types"
              :rules="[(v) => !!v || '必須項目です。']"
              label="お問合せ種類"
              required
            />

            <v-text-field
              name="name"
              v-model="name"
              :rules="nameRules"
              label="お名前"
              placeholder="例：令和 太郎"
              counter="20"
              color="primary"
              required
            />

            <v-text-field
              name="kana"
              v-model="kana"
              :rules="kanaRules"
              label="ふりがな"
              placeholder="例：れいわ たろう"
              counter="20"
              required
            />

            <v-text-field
              name="email"
              v-model="email"
              :rules="emailRules"
              label="メールアドレス"
              placeholder="例：rtaro@leafage.co.jp"
              counter="100"
              required
            />

            <v-text-field
              name="organization"
              v-model="organization"
              label="所属名・会社名"
              placeholder="例：リーフエイジ合同会社"
              counter="20"
            />

            <v-text-field
              name="phone"
              v-model="phone"
              :rules="phoneRules"
              label="電話番号"
              placeholder="例：03-xxxx-xxxx"
              counter="20"
            />

            <v-textarea
              name="content"
              v-model="content"
              :rules="contentRules"
              label="お問合せ内容"
              counter="5000"
            />
          </v-col>
        </v-row>
        <v-row justify="center" align="center" class="ma-10">
          <v-btn
            :disabled="!valid"
            color="success"
            class="text-right"
            x-large
            @click="validate"
          >
            確認
          </v-btn>
        </v-row>
      </v-form>
    </v-container>
  </v-content>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  toRefs,
} from '@vue/composition-api';

import hero from '~/hooks/images/contact/hero';

export default defineComponent({
  components: {
    PageHero: () => import('~/components/molecules/PageHero.vue'),
    VueRecaptcha: () => import('vue-recaptcha'),
  },
  setup(_, ctx) {
    const state = reactive({
      valid: true,
      name: '',
      kana: '',
      email: '',
      organization: '',
      phone: '',
      select: '',
      content: '',
      dialog: false,
      recaptcha: '',
      verified: false,
    });
    const contactList = computed(() => [
      { label: 'お問合せ種類', name: 'type', value: state.select },
      { label: 'お名前', name: 'name', value: state.name },
      { label: 'ふりがな', name: 'kana', value: state.kana },
      { label: 'メールアドレス', name: 'email', value: state.email },
      {
        label: '所属名・会社名',
        name: 'organization',
        value: state.organization,
      },
      { label: '電話番号', name: 'phone', value: state.phone },
      { label: 'お問合せ内容', name: 'content', value: state.content },
    ]);
    const validate = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((ctx as any).refs.form.validate()) {
        state.dialog = true;
      }
    };
    const verify = (response: string) => {
      state.recaptcha = response;
      state.verified = true;
    };
    return {
      hero,
      recaptchaKey: process.env.SITE_RECAPTCHA_KEY,
      types: ['案件のご相談・ご依頼', 'その他お問合せ'],
      nameRules: [(v: string) => !!v || '必須項目です。'],
      kanaRules: [(v: string) => !!v || '必須項目です。'],
      emailRules: [
        (v: string) => !!v || '必須項目です。',
        (v: string) =>
          /.+@.+/.test(v) || '正しいメールアドレスを入力してください。',
      ],
      phoneRules: [
        (v: string) =>
          v == '' || /^[\d-]+$/.test(v) || '正しい電話番号を入力してください。',
      ],
      contentRules: [(v: string) => !!v || '必須項目です。'],
      ...toRefs(state),
      contactList,
      validate,
      verify,
    };
  },
  head: {
    script: [
      {
        innerHTML: '',
        type: 'text/javascript',
        src:
          '//www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
        async: true,
      },
    ],
    title: 'お問合せ',
  },
});
</script>
