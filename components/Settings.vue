<template>
  <div class="c-game-ui__settings">
    <h1>Settings</h1>
    <div class="c-game-ui__settings__config">
      <div class="c-game-ui__settings__config__section">
        <p>Frets</p>
        <div class="c-game-ui__settings__config__section__selection">
          <button
            :style="toggleButton(firstFretInput, true, 1)"
            @click="setSetting(firstFretInput, 'setFirstFretInput', 1, 11, -1)"
          >
            -
          </button>
          <div>{{ firstFretInput }}</div>
          <button
            :style="toggleButton(firstFretInput, false, 11)"
            @click="setSetting(firstFretInput, 'setFirstFretInput', 1, 11, 1)"
          >
            +
          </button>
        </div>
        <div class="c-game-ui__settings__config__section__selection">
          <button
            :style="toggleButton(lastFretInput, true, 1)"
            @click="setSetting(lastFretInput, 'setLastFretInput', 1, 11, -1)"
          >
            -
          </button>
          <div>{{ lastFretInput }}</div>
          <button
            :style="toggleButton(lastFretInput, false, 12)"
            @click="setSetting(lastFretInput, 'setLastFretInput', 1, 12, 1)"
          >
            +
          </button>
        </div>
      </div>
      <div class="c-game-ui__settings__config__section">
        <p>Rounds</p>
        <div class="c-game-ui__settings__config__section__selection">
          <button
            :style="toggleButton(rounds, true, 1)"
            @click="setSetting(rounds, 'setRounds', 1, 15, -1)"
          >
            -
          </button>
          <div>{{ rounds }}</div>
          <button
            :style="toggleButton(rounds, false, 15)"
            @click="setSetting(rounds, 'setRounds', 1, 15, 1)"
          >
            +
          </button>
        </div>
      </div>
      <div class="c-game-ui__settings__config__section">
        <p>Difficulty</p>
        <div class="c-game-ui__settings__config__section__selection">
          <button
            :style="toggleButton(selectedDifficulty, true, 0)"
            @click="setSetting(selectedDifficulty, 'setDifficulty', 0, 2, -1)"
          >
            -
          </button>
          <div>{{ difficulty }}</div>
          <button
            :style="toggleButton(selectedDifficulty, false, 2)"
            @click="setSetting(selectedDifficulty, 'setDifficulty', 0, 2, 1)"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapSetter } from 'vuex';
export default {
  computed: mapGetters({
    firstFretInput: 'settings/getFirstFretInput',
    lastFretInput: 'settings/getLastFretInput',
    rounds: 'settings/getRounds',
    difficulty: 'settings/getDifficulty',
    selectedDifficulty: 'settings/getSelectedDifficulty'
  }),
  methods: {
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
