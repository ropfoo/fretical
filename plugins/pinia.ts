import { createPinia, setActivePinia } from 'pinia';

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();

  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);

  return {
    provide: {
      pinia
    }
  };
});
