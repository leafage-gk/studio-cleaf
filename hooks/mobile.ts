import { computed, SetupContext } from '@vue/composition-api';

const useMobile = (ctx: SetupContext) => ({
  isMobile: computed(() => ctx.root.$vuetify.breakpoint.smAndDown),
});

export default useMobile;
