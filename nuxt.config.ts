import { Configuration } from '@nuxt/types';

import env from './config/env';
import head from './config/head';
import vuetify from './config/modules/vuetify';

const configuration: Configuration = {
  mode: 'universal',
  head,
  env,
  loading: { color: 'white' },
  // css: ['~/assets/styles/app.scss'],
  plugins: ['~/plugins/composition-api.ts'],
  modules: ['nuxt-robots-module'],
  buildModules: [
    '@nuxtjs/svg',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    'nuxt-webfontloader',
  ],
  vuetify,
};

export default configuration;
