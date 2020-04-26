import { reactive, toRefs } from '@vue/composition-api';

const useStore = () => {
  const state = reactive({
    isRootMounted: false,
  });
  const setRootMounted = () => {
    state.isRootMounted = true;
  };
  return {
    ...toRefs(state),
    setRootMounted,
  };
};

export type Store = ReturnType<typeof useStore>;
export default useStore;
