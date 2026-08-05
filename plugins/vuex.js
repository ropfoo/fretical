import { createStore } from 'vuex';
import * as frets from '../store/frets';
import * as manager from '../store/manager';
import * as settings from '../store/settings';
import * as tones from '../store/tones';

const createModule = module => ({
  namespaced: true,
  state: module.state,
  mutations: module.mutations,
  getters: module.getters
});

export default defineNuxtPlugin(nuxtApp => {
  const store = createStore({
    modules: {
      frets: createModule(frets),
      manager: createModule(manager),
      settings: createModule(settings),
      tones: createModule(tones)
    }
  });

  nuxtApp.vueApp.use(store);
});
