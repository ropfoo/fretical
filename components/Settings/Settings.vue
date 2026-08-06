<template>
  <div class="c-game-settings">
    <AppHeader />
    <h1>Settings</h1>
    <div class="c-game-settings__config">
      <div class="c-game-settings__config__section">
        <p>Frets</p>
      </div>
      <div class="c-game-settings__config__fret-wrapper">
        <div class="c-game-settings__config__fret-selection">
          <div
            class="c-SettingsArrow-up-btn"
            :style="toggleButton(firstFretInput, false, MAX_FIRST_FRET)"
            @click="[
              lastFretInput - 1 > firstFretInput
                ? setSetting(
                    firstFretInput,
                    settingsStore.setFirstFretInput,
                    MIN_FRET + 1,
                    MAX_FIRST_FRET,
                    1
                  )
                : ''
            ]"
          >
            <SettingsArrow :direction="'up'" />
          </div>
          <transition name="textScale">
            <p :key="firstFretInput">{{ firstFretInput }}</p>
          </transition>

          <div
            class="c-SettingsArrow-down-btn"
            :style="toggleButton(firstFretInput, true, 0)"
            @click="
              setSetting(
                firstFretInput,
                settingsStore.setFirstFretInput,
                MIN_FRET,
                MAX_FIRST_FRET,
                -1
              )
            "
          >
            <SettingsArrow :direction="'down'" />
          </div>
        </div>
        <div class="c-game-settings__config__fret-selection">
          <div
            class="c-SettingsArrow-up-btn"
            :style="toggleButton(lastFretInput, false, MAX_FRET)"
            @click="
              setSetting(
                lastFretInput,
                settingsStore.setLastFretInput,
                MIN_LAST_FRET,
                MAX_FRET,
                1
              )
            "
          >
            <SettingsArrow :direction="'up'" />
          </div>
          <transition name="textScale">
            <p :key="lastFretInput">{{ lastFretInput }}</p>
          </transition>

          <div
            class="c-SettingsArrow-down-btn"
            :style="toggleButton(lastFretInput, true, MIN_LAST_FRET)"
            @click="[
              lastFretInput - 1 > firstFretInput
                ? setSetting(
                    lastFretInput,
                    settingsStore.setLastFretInput,
                    MIN_LAST_FRET,
                    MAX_FRET,
                    -1
                  )
                : ''
            ]"
          >
            <SettingsArrow :direction="'down'" />
          </div>
        </div>
      </div>
      <div class="c-game-settings__config__section">
        <p>Rounds</p>
      </div>
      <div class="c-game-settings__config__section__selection">
        <div
          :style="toggleButton(rounds, true, 1)"
          @click="setSetting(rounds, settingsStore.setRounds, 1, 15, -1)"
        >
          <SettingsArrow :direction="'left'" />
        </div>
        <transition name="textScale">
          <div :key="rounds">{{ rounds }}</div>
        </transition>
        <div
          :style="toggleButton(rounds, false, 15)"
          @click="setSetting(rounds, settingsStore.setRounds, 1, 15, 1)"
        >
          <SettingsArrow :direction="'right'" />
        </div>
      </div>
      <div class="c-game-settings__config__section">
        <p>Difficulty</p>
      </div>
      <div class="c-game-settings__config__section__selection">
        <div
          :style="toggleButton(selectedDifficulty, true, 0)"
          @click="
            setSetting(
              selectedDifficulty,
              settingsStore.setDifficulty,
              0,
              2,
              -1
            )
          "
        >
          <SettingsArrow :direction="'left'" />
        </div>
        <transition name="textScale">
          <div :key="difficulty">{{ difficulty }}</div>
        </transition>
        <div
          :style="toggleButton(selectedDifficulty, false, 2)"
          @click="
            setSetting(selectedDifficulty, settingsStore.setDifficulty, 0, 2, 1)
          "
        >
          <SettingsArrow :direction="'right'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import type { CSSProperties } from 'vue';
import AppHeader from '../AppHeader/AppHeader.vue';
import SettingsArrow from '../util/SettingsArrow/SettingsArrow.vue';
import { MAX_FRET, MIN_FRET } from '../../stores/frets';
import { useSettingsStore } from '../../stores/settings';
import type { FretStep } from '../../types/app';

const MAX_FIRST_FRET = MAX_FRET - 1;
const MIN_LAST_FRET = MIN_FRET + 1;

const { $pinia } = useNuxtApp();
const settingsStore = useSettingsStore($pinia);
const {
  firstFretInput,
  lastFretInput,
  rounds,
  difficulty,
  selectedDifficulty
} = storeToRefs(settingsStore);

function setSetting(
  current: number,
  update: (value: FretStep) => void,
  min: number,
  max: number,
  value: FretStep
) {
  if (Math.sign(value) === -1) {
    if (current > min) {
      update(value);
    }
  } else {
    if (current < max) {
      update(value);
    }
  }
}

function toggleButton(
  type: number,
  isMax: boolean,
  value: number
): CSSProperties {
  if (isMax) {
    return type > value ? { opacity: 1 } : { opacity: 0, cursor: 'auto' };
  }

  return type < value ? { opacity: 1 } : { opacity: 0, cursor: 'auto' };
}
</script>
