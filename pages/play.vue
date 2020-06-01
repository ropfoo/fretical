<template>
  <div>
    <div v-if="gameOver" class="c-game-settings">
      <h1>Game Over</h1>
      <h1>Score: {{ score }}</h1>
      <button @click="startGame">Again!</button>
      <button @click="quitGame">Quit</button>
    </div>
    <div v-if="settings">
      <Settings />
      <div class="c-game-settings" :style="{ margin: 0, 'padding-top': 0 }">
        <button @click="startGame">Let's go!</button>
      </div>
    </div>
    <div v-else-if="!gameOver && !settings" class="c-fretboard-view">
      <back-arrow @click.native="disablePlayMode" :destination="'/'" />

      <div class="c-game-ui">
        <div class="c-game-ui__tone">
          <h1
            class="c-game-ui__tone__active"
            :class="[
              activeTone.name === askedTone.name
                ? 'c-game-ui__tone__active--success'
                : 'c-game-ui__tone__active--fail'
            ]"
          >
            {{ activeTone.name }}
          </h1>
          <h1 class="c-game-ui__tone__asked">{{ askedTone.name }}</h1>
        </div>
        <div class="c-game-ui__progress-ui">
          <div class="c-time-bar__container">
            <div
              class="c-time-bar__progress"
              :style="[
                isMobile
                  ? { transform: 'scaleY(' + timeBar + ')' }
                  : { transform: 'scaleX(' + timeBar + ')' }
              ]"
            ></div>
          </div>
          <div class="c-game-ui__progress-ui__progress">
            <h1>{{ round }}</h1>
            <hr />
            <h3>{{ rounds }}</h3>
          </div>
        </div>
        <div class="c-game-ui__score">
          <h1>{{ score }}</h1>
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
import BackArrow from '../components/util/BackArrow.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
  components: {
    Settings,
    Fretboard,
    BackArrow
  },
  data() {
    return {
      isMobile: Boolean,
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
  mounted() {
    window.innerWidth > 900 ? (this.isMobile = false) : (this.isMobile = true);
  },
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
      this.$store.commit('manager/resetScore');
      this.gameOver = false;
      this.settings = false;
      this.$store.commit('tones/setActiveTone', { name: '-' });
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
          this.$store.commit('tones/setActiveTone', { name: '-' });
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
      this.$store.commit('manager/setTotalScore', this.score);
      this.gameOver = true;
      this.resetAll();
    },
    quitGame() {
      this.$router.push('/');
    }
  }
};
</script>
