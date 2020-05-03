import { Configuration } from '@nuxt/types';

import env from './config/env';
import head from './config/head';
import googleAnalytics from './config/modules/google-analytics';
import sitemap from './config/modules/sitemap';
import vuetify from './config/modules/vuetify';

const configuration: Configuration = {
  mode: 'universal',
  head,
  env,
  loading: { color: 'white' },
  // css: ['~/assets/styles/app.scss'],
  plugins: ['~/plugins/composition-api.ts'],
  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap'],
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/svg',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    'nuxt-webfontloader',
  ],
  sitemap,
  googleAnalytics,
  vuetify,
};

export default configuration;
