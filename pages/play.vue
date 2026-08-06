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
      <back-arrow @click="disablePlayMode" :destination="'/'" />

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

      <fretboard :firstFret="firstFretInput" :lastFret="lastFretInput" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import Fretboard from '../components/Fretboard/Fretboard.vue';
import Settings from '../components/Settings/Settings.vue';
import BackArrow from '../components/util/BackArrow/BackArrow.vue';
import { useManagerStore } from '../stores/manager';
import { useSettingsStore } from '../stores/settings';
import { useTonesStore } from '../stores/tones';

const { $pinia } = useNuxtApp();
const managerStore = useManagerStore($pinia);
const settingsStore = useSettingsStore($pinia);
const tonesStore = useTonesStore($pinia);
const router = useRouter();

const isMobile = ref(false);
const gameOver = ref(false);
const settings = ref(true);
const round = ref(0);
const interval = ref<ReturnType<typeof setInterval> | null>(null);
const questionTime = 10000;
const timeBar = ref(0);
const timeBarInterval = ref<ReturnType<typeof setInterval> | null>(null);
const timeBarReady = ref(false);

const { firstFretInput, lastFretInput, rounds } = storeToRefs(settingsStore);
const { activeTone, askedTone } = storeToRefs(tonesStore);
const { score, paused } = storeToRefs(managerStore);

function enablePlayMode(): void {
  managerStore.setPlayMode(true);
}

function disablePlayMode(): void {
  managerStore.setPlayMode(false);
}

function determineAskedTone(): void {
  if (!paused.value) {
    tonesStore.determineAskedTone([firstFretInput.value, lastFretInput.value]);
    timeBarReady.value = !timeBarReady.value;
    timeBar.value = 0;
    console.log('new tone');
  }
}

function newRound(): void {
  if (round.value < rounds.value - 1) {
    managerStore.setToneTriggered(false);
    if (!paused.value) {
      tonesStore.setActiveTone({ name: '-', string: 0 });
      determineAskedTone();
      round.value++;
      console.log(round.value);
    }
  } else {
    isGameOver();
  }
}

function reduceTimeBar(): void {
  if (timeBar.value < 1) {
    timeBar.value += 0.00115;
  }
}

function startGameLoop(): void {
  timeBarInterval.value = setInterval(reduceTimeBar, 10);
  interval.value = setInterval(newRound, questionTime);
}

function resetAll(): void {
  disablePlayMode();
  if (interval.value) {
    clearInterval(interval.value);
  }
  if (timeBarInterval.value) {
    clearInterval(timeBarInterval.value);
  }
  timeBarInterval.value = null;
  interval.value = null;
  round.value = 0;
}

function isGameOver(): void {
  gameOver.value = true;
  resetAll();
}

function startGame(): void {
  managerStore.resetScore();
  gameOver.value = false;
  settings.value = false;
  tonesStore.setActiveTone({ name: '-', string: 0 });
  managerStore.setPaused(false);
  enablePlayMode();
  determineAskedTone();
  startGameLoop();
}

function quitGame(): void {
  router.push('/');
}

onMounted(() => {
  isMobile.value = window.innerWidth <= 900;
});

onBeforeUnmount(() => {
  isGameOver();
});

watch(paused, () => {
  if (paused.value) {
    if (interval.value) {
      clearInterval(interval.value);
    }
    if (timeBarInterval.value) {
      clearInterval(timeBarInterval.value);
    }
    setTimeout(() => {
      if (round.value < rounds.value - 1) {
        managerStore.setPaused(false);
        newRound();
        startGameLoop();
      } else {
        isGameOver();
      }
    }, 2000);
  }
});
</script>
