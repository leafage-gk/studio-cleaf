import { onMounted, provide } from '@vue/composition-api';

import constData from '~/config/const';

import { settingsKeys, storeKey } from './keys';
import useStore from './store';

const build = () => {
  const settings = {
    title: constData.title,
    url: constData.url,
  };
  provide(settingsKeys.title, settings.title);
  provide(settingsKeys.url, settings.url);

  const store = useStore();
  provide(storeKey, store);
  onMounted(() => {
    store.setRootMounted();
  });

  return {
    settings,
    store,
  };
};

export default build;
