import { Configuration } from '@nuxt/types';

import pkg from '../package.json';
import constData from './const';

const head: Configuration['head'] = {
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'keywords',
      name: 'keywords',
      content: constData.keywords.join(','),
    },
    { hid: 'description', name: 'description', content: pkg.description },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: constData.url },
    {
      hid: 'og:title',
      property: 'og:title',
      content: constData.title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: pkg.description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://studio-cleaf.com/ogp.jpg',
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: constData.title,
    },
    { hid: 'twitter:card', name: 'twitter:card', content: pkg.description },
    {
      hid: 'twitter:title',
      property: 'twitter:title',
      content: constData.title,
    },
  ],
  titleTemplate: '%s | ' + constData.title,
  title: constData.title,
};

export default head;
