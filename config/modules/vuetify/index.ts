import { Configuration } from '@nuxt/types';

const vuetify: Configuration['vuetify'] = {
  treeShake: true,
  customVariables: ['~/assets/styles/variables.scss'],
  defaultAssets: {
    font: {
      family: 'M PLUS 1p',
    },
    icons: false,
  },
  optionsPath: './config/modules/vuetify/options.ts',
};

export default vuetify;
