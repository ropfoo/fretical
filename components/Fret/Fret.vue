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
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import StringComponent from '../String/String.vue';
import { useManagerStore } from '../../stores/manager';
import { useTonesStore } from '../../stores/tones';
import type { Tone } from '../../types/app';

const props = defineProps<{
  number: number;
  tones: ReadonlyArray<Tone>;
}>();
const { $pinia } = useNuxtApp();
const { showAllTones } = storeToRefs(useManagerStore($pinia));
const { activeTone } = storeToRefs(useTonesStore($pinia));

function checkActive(tone: Tone): boolean {
  if (showAllTones.value) {
    return activeTone.value.name === tone.name;
  }

  return activeTone.value === tone;
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
