<template>
  <div class="c-fret-range-control" aria-label="Fret range">
    <label class="c-fret-range-control__field">
      <span>From</span>
      <input
        type="number"
        inputmode="numeric"
        :min="MIN_FRET"
        :max="lastFret"
        :value="firstFret"
        @change="setFirstFret"
      />
    </label>
    <span class="c-fret-range-control__separator">-</span>
    <label class="c-fret-range-control__field">
      <span>To</span>
      <input
        type="number"
        inputmode="numeric"
        :min="firstFret"
        :max="MAX_FRET"
        :value="lastFret"
        @change="setLastFret"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { MAX_FRET, MIN_FRET, useFretsStore } from '../../stores/frets';

const { $pinia } = useNuxtApp();
const fretsStore = useFretsStore($pinia);
const { firstFret, lastFret } = storeToRefs(fretsStore);

function getInputValue(event: Event): number {
  return Number((event.currentTarget as HTMLInputElement).value);
}

function setFirstFret(event: Event): void {
  fretsStore.setFirstFretValue(getInputValue(event));
}

function setLastFret(event: Event): void {
  fretsStore.setLastFretValue(getInputValue(event));
}
</script>
