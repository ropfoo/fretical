<template>
  <div class="c-fretboard" :style="fretboardStyle">
    <template v-for="fret in visibleFrets" :key="fret.number">
      <Fret
        :active-indicator-label="activeIndicatorLabel"
        :active-indicator-tone="activeIndicatorTone"
        :number="fret.number"
        :tones="fret.tones"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { CSSProperties } from 'vue';
import { storeToRefs } from 'pinia';
import Fret from '../Fret/Fret.vue';
import { DEFAULT_TONES } from '../../data/defaultTones';
import { useTonesStore } from '../../stores/tones';
import type { ActiveTone, SelectedTone, Tone } from '../../types/app';

const props = defineProps<{
  firstFret: number;
  lastFret: number;
}>();

const { $pinia } = useNuxtApp();
const { activeTone } = storeToRefs(useTonesStore($pinia));

const visibleFrets = computed(() =>
  DEFAULT_TONES.map((tones, index) => ({
    number: index,
    tones
  })).filter(
    (fret) => fret.number >= props.firstFret && fret.number <= props.lastFret
  )
);

const visibleTones = computed(() =>
  visibleFrets.value.flatMap((fret) => fret.tones)
);

const activeIndicatorLabel = computed(() =>
  isSelectedTone(activeTone.value) ? activeTone.value.canonicalName : null
);

const activeIndicatorTone = computed<Tone | null>(() => {
  const selectedTone = activeTone.value;

  if (!isSelectedTone(selectedTone)) {
    return null;
  }

  const exactMatch = visibleFrets.value
    .find((fret) => fret.number === selectedTone.fret)
    ?.tones.find(
      (tone) =>
        tone.pitchClass === selectedTone.pitchClass &&
        tone.string === selectedTone.string
    );

  if (exactMatch) {
    return exactMatch;
  }

  const samePitchClassMatch = visibleTones.value.find(
    (tone) => tone.pitchClass === selectedTone.pitchClass
  );

  return samePitchClassMatch ?? visibleTones.value[0] ?? null;
});

const fretboardStyle = computed<CSSProperties>(() => ({
  '--visible-fret-count': visibleFrets.value.length
}));

function isSelectedTone(tone: ActiveTone): tone is SelectedTone {
  return tone !== null && 'fret' in tone;
}
</script>
