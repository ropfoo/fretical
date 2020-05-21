<template>
  <div class="c-game-settings">
    <h1>Settings</h1>
    <div class="c-game-settings__config">
      <div class="c-game-settings__config__section">
        <p>Frets</p>
      </div>
      <div class="c-game-settings__config__fret-wrapper">
        <div class="c-game-settings__config__fret-selection">
          <div
            class="c-arrow-up-btn"
            :style="toggleButton(firstFretInput, false, 11)"
            @click="
              [
                lastFretInput - 1 > firstFretInput
                  ? setSetting(firstFretInput, 'setFirstFretInput', 1, 11, 1)
                  : ''
              ]
            "
          >
            <arrow :direction="'up'" />
          </div>
          <p>{{ firstFretInput }}</p>
          <div
            class="c-arrow-down-btn"
            :style="toggleButton(firstFretInput, true, 0)"
            @click="setSetting(firstFretInput, 'setFirstFretInput', 0, 11, -1)"
          >
            <arrow :direction="'down'" />
          </div>
        </div>
        <div class="c-game-settings__config__fret-selection">
          <div
            class="c-arrow-up-btn"
            :style="toggleButton(lastFretInput, false, 12)"
            @click="setSetting(lastFretInput, 'setLastFretInput', 1, 12, 1)"
          >
            <arrow :direction="'up'" />
          </div>
          <p>{{ lastFretInput }}</p>
          <div
            class="c-arrow-down-btn"
            :style="toggleButton(lastFretInput, true, 1)"
            @click="
              [
                lastFretInput - 1 > firstFretInput
                  ? setSetting(lastFretInput, 'setLastFretInput', 1, 11, -1)
                  : ''
              ]
            "
          >
            <Arrow :direction="'down'" />
          </div>
        </div>
      </div>
      <div class="c-game-settings__config__section">
        <p>Rounds</p>
      </div>
      <div class="c-game-settings__config__section__selection">
        <div
          :style="toggleButton(rounds, true, 1)"
          @click="setSetting(rounds, 'setRounds', 1, 15, -1)"
        >
          <arrow :direction="'left'" />
        </div>
        <div>{{ rounds }}</div>
        <div
          :style="toggleButton(rounds, false, 15)"
          @click="setSetting(rounds, 'setRounds', 1, 15, 1)"
        >
          <arrow :direction="'right'" />
        </div>
      </div>
      <div class="c-game-settings__config__section">
        <p>Difficulty</p>
      </div>
      <div class="c-game-settings__config__section__selection">
        <div
          :style="toggleButton(selectedDifficulty, true, 0)"
          @click="setSetting(selectedDifficulty, 'setDifficulty', 0, 2, -1)"
        >
          <arrow :direction="'left'" />
        </div>
        <div>{{ difficulty }}</div>
        <div
          :style="toggleButton(selectedDifficulty, false, 2)"
          @click="setSetting(selectedDifficulty, 'setDifficulty', 0, 2, 1)"
        >
          <arrow :direction="'right'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapSetter } from 'vuex';
import Arrow from '../components/Arrow.vue';
export default {
  components: {
    Arrow
  },
  computed: mapGetters({
    firstFretInput: 'settings/getFirstFretInput',
    lastFretInput: 'settings/getLastFretInput',
    rounds: 'settings/getRounds',
    difficulty: 'settings/getDifficulty',
    selectedDifficulty: 'settings/getSelectedDifficulty'
  }),
  methods: {
    setFret(isFirst) {
      if (isFirst) {
        lastFretInput > firstFretInput ? true : false;
      }
    },
    setSetting(type, mutation, min, max, value) {
      if (Math.sign(value) === -1) {
        type > min ? this.$store.commit(`settings/${mutation}`, value) : '';
      } else {
        type < max ? this.$store.commit(`settings/${mutation}`, value) : '';
      }
    },
    toggleButton(type, isMax, value) {
      if (isMax) {
        return type > value ? { opacity: 1 } : { opacity: 0, cursor: 'auto' };
      } else {
        return type < value ? { opacity: 1 } : { opacity: 0, cursor: 'auto' };
      }
    }
  }
};
</script>
