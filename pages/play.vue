<template>
  <div>
    <div v-if="settings" class="game-settings">
      <h1>Learn Mode</h1>
      <button @click="startGame">Let's go!</button>
    </div>
    <div v-else class="c-fretboard-view">
      <nuxt-link
        @click.native="disablePlayMode"
        class="c-fretboard-view__back-button"
        to="/"
      >
        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.7071 8.70711C21.0976 8.31659 21.0976 7.68342 20.7071 7.2929L14.3431 0.928935C13.9526 0.53841 13.3195 0.53841 12.9289 0.928934C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-1.66103e-07 9L20 9L20 7L1.66103e-07 7L-1.66103e-07 9Z"
            fill="#E43F5A"
          />
        </svg>
      </nuxt-link>
      <div class="c-fretboard-view__active-tone">
        <h1>{{ askedTone.name }}</h1>
        <h1>{{ activeTone.name }}</h1>
        <h1>{{ score }}</h1>
      </div>

      <fretboard
        :firstFret="firstFret"
        :lastFret="lastFret"
        :showButtons="false"
      />
    </div>
  </div>
</template>

<script>
import Fretboard from '../components/Fretboard.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      settings: true,
      firstFret: 1,
      lastFret: 6
    };
  },
  components: {
    Fretboard
  },
  computed: mapGetters({
    activeTone: 'tones/getActiveTone',
    askedTone: 'tones/getAskedTone',
    tones: 'tones/getDefaultTones',
    score: 'manager/getScore'
  }),
  watch: {
    score: function() {
      this.determineAskedTone();
    }
  },
  methods: {
    startGame() {
      this.enablePlayMode();
      this.determineAskedTone();
    },
    enablePlayMode() {
      this.$store.commit('manager/setPlayMode', true);
    },
    disablePlayMode() {
      this.$store.commit('manager/setPlayMode', false);
    },
    determineAskedTone() {
      this.$store.commit('tones/determineAskedTone', [
        this.firstFret,
        this.lastFret
      ]);
      this.settings = false;
    }
  }
};
</script>
