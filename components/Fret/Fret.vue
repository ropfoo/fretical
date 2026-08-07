<template>
  <div class="c-fret">
    <div
      :class="[number === 0 ? 'c-fret--open' : 'c-fret--style']"
      v-for="(tone, index) in tones"
      :key="tone.string"
    >
      <StringComponent
        :active="checkActive(tone)"
        :fret-number="number"
        :label="getIndicatorLabel(tone)"
        :tone="tone"
        :thickness="index + 1"
      />
    </div>
    <div v-if="checkDot()" class="c-fret__circle-container">
      <div class="c-fret__circle-container--circle"></div>
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
  activeIndicatorLabel?: string | null;
  activeIndicatorTone?: Tone | null;
  number: number;
  tones: ReadonlyArray<Tone>;
}>();
const { $pinia } = useNuxtApp();
const { showAllTones } = storeToRefs(useManagerStore($pinia));
const { activeTone } = storeToRefs(useTonesStore($pinia));

function checkActive(tone: Tone): boolean {
  if (showAllTones.value) {
    return activeTone.value?.pitchClass === tone.pitchClass;
  }

  return props.activeIndicatorTone === tone;
}

function getIndicatorLabel(tone: Tone): string {
  if (
    !showAllTones.value &&
    props.activeIndicatorTone === tone &&
    activeTone.value?.pitchClass !== tone.pitchClass &&
    props.activeIndicatorLabel
  ) {
    return props.activeIndicatorLabel;
  }

  return tone.canonicalName;
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
