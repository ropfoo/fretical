<template>
  <div>
    <div v-if="gameOver" class="c-game-ui__settings">
      <h1>Game Over</h1>
      <h1>Score: {{ score }}</h1>
      <button @click="startGame">Again!</button>
      <button @click="quitGame">Quit</button>
    </div>
    <div v-if="settings">
      <Settings />
      <div class="c-game-settings" :style="{ padding: '0 2rem', margin: 0 }">
        <button @click="startGame">Let's go!</button>
      </div>
    </div>
    <div v-else-if="!gameOver && !settings" class="c-fretboard-view">
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
      <div
        class="c-fretboard-view__active-tone"
        :class="[
          askedTone.name === activeTone.name
            ? 'c-fretboard-view__active-tone--success'
            : 'c-fretboard-view__active-tone--fail'
        ]"
      >
        <h1>{{ askedTone.name }}</h1>
        <h1>{{ activeTone.name }}</h1>
      </div>
      <div class="c-game-ui__score-ui">
        <div class="c-game-ui__score-ui__score">
          <h1>{{ round }}</h1>
        </div>
        <div class="c-time-bar__container">
          <div
            class="c-time-bar__progress"
            :style="{ transform: 'scaleY(' + timeBar + ')' }"
          ></div>
        </div>
      </div>

      <fretboard
        :firstFret="firstFretInput + 1"
        :lastFret="lastFretInput + 1"
        :showButtons="false"
      />
    </div>
  </div>
</template>

<script>
import Fretboard from '../components/Fretboard.vue';
import Settings from '../components/Settings.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      gameOver: false,
      settings: true,
      round: 0,
      firsTone: true,
      interval: '',
      questionTime: 10000,
      timeBar: 0,
      timeBarInterval: ''
    };
  },
  components: {
    Settings,
    Fretboard
  },
  computed: mapGetters({
    firstFretInput: 'settings/getFirstFretInput',
    lastFretInput: 'settings/getLastFretInput',
    rounds: 'settings/getRounds',
    difficulty: 'settings/getDifficulty',
    activeTone: 'tones/getActiveTone',
    askedTone: 'tones/getAskedTone',
    tones: 'tones/getDefaultTones',
    score: 'manager/getScore',
    paused: 'manager/getPaused'
  }),
  beforeDestroy: function() {
    this.isGameOver();
  },
  watch: {
    paused: function() {
      if (this.paused) {
        clearInterval(this.interval);
        clearInterval(this.timeBarInterval);
        setTimeout(() => {
          if (this.round < this.rounds - 1) {
            this.$store.commit('manager/setPaused', false);
            this.newRound();
            this.startGameLoop();
          } else {
            this.isGameOver();
          }
        }, 2000);
      }
    }
  },
  methods: {
    startGame() {
      this.gameOver = false;
      this.settings = false;
      this.$store.commit('tones/setActiveTone', { name: 'tap a string' });
      this.$store.commit('manager/setPaused', false);
      this.enablePlayMode();
      this.determineAskedTone();
      this.startGameLoop();
    },
    enablePlayMode() {
      this.$store.commit('manager/setPlayMode', true);
    },
    disablePlayMode() {
      this.$store.commit('manager/setPlayMode', false);
    },
    determineAskedTone() {
      if (!this.paused) {
        this.$store.commit('tones/determineAskedTone', [
          this.firstFretInput,
          this.lastFretInput
        ]);
        this.timeBarReady = !this.timeBarReady;
        this.timeBar = 0;
        console.log('new tone');
      }
    },
    newRound() {
      if (this.round < this.rounds - 1) {
        this.$store.commit('manager/setToneTriggered', false);
        if (!this.paused) {
          this.$store.commit('tones/setActiveTone', { name: 'tap a string' });
          this.determineAskedTone();
          this.round++;
          console.log(this.round);
        }
      } else {
        this.isGameOver();
      }
    },
    reduceTimeBar() {
      if (this.timeBar < 1) {
        this.timeBar += 0.00115;
      }
    },
    startGameLoop() {
      this.timeBarInterval = setInterval(this.reduceTimeBar, 10);
      this.interval = setInterval(this.newRound, this.questionTime);
    },
    resetAll() {
      this.disablePlayMode();
      clearInterval(this.interval);
      clearInterval(this.timeBarInterval);
      this.timeBarInterval = '';
      this.interval = '';
      this.round = 0;
    },
    isGameOver() {
      this.gameOver = true;
      this.resetAll();
    },
    quitGame() {
      this.$router.push('/');
    }
  }
};
</script>
