<template>
  <div>
    <div class="c-fret">
      <!-- Generate six strings -->
      <div
        :class="[number === 0 ? 'c-fret--open' : 'c-fret--style']"
        v-for="(tone, index) in tones"
        :key="tone.name + tone.string"
      >
        <StringComponent
          :tone="tone"
          :thickness="index + 1"
          :active="checkActive(tone)"
        />
      </div>
      <!-- Check if there is a fretmarker beneath the string -->
      <div v-if="checkDot()" class="c-fret__circle-container">
        <div class="c-fret__circle-container--circle"></div>
      </div>
      <!-- Checkes if first or last fret to show range number -->
      <template :style="{ background: 'none' }" v-if="isFirst || isLast">
        <div class="c-fret__fret-adjust-wrapper">
          <template v-if="isFirst">
            <div v-if="buttons" class="c-fret__buttons">
              <button @click="setFirstFret(1)">+</button>
              <button v-if="number >= 1" @click="setFirstFret(-1)">-</button>
            </div>
            <div class="c-fret__number-container">
              <div class="c-fret__number-container__number">{{ number }}</div>
            </div>
          </template>
          <template v-else>
            <div v-if="buttons" class="c-fret__buttons">
              <button v-if="number < 12" @click="setLastFret(1)">+</button>
              <button @click="setLastFret(-1)">-</button>
            </div>
            <div class="c-fret__number-container">
              <div class="c-fret__number-container__number">{{ number }}</div>
            </div>
          </template>
        </div>
      </template>
      <template v-else>
        <div class="c-fret__number-container"></div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import StringComponent from '../components/String.vue';
import { useFretsStore } from '../stores/frets';
import { useManagerStore } from '../stores/manager';
import { useTonesStore } from '../stores/tones';
import type { FretStep, Tone } from '../types/app';

const props = defineProps<{
  number: number;
  tones: ReadonlyArray<Tone>;
  isFirst: boolean;
  isLast: boolean;
  buttons: boolean;
}>();
const { $pinia } = useNuxtApp();
const fretsStore = useFretsStore($pinia);
const { showAllTones } = storeToRefs(useManagerStore($pinia));
const { activeTone } = storeToRefs(useTonesStore($pinia));

function checkActive(tone: Tone): boolean {
  if (showAllTones.value) {
    return activeTone.value.name === tone.name;
  }

  return activeTone.value === tone;
}

function setFirstFret(amount: FretStep): void {
  console.log('first');
  fretsStore.setFirstFret(amount);
}

function setLastFret(amount: FretStep): void {
  console.log('last');
  fretsStore.setLastFret(amount);
}

function checkDot(): boolean {
  return (
    props.number === 3 ||
    props.number === 5 ||
    props.number === 7 ||
    props.number === 9
  );
}
</script>
