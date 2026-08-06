<template>
  <div class="c-fretboard">
    <template v-for="fret in visibleFrets" :key="fret.number">
      <Fret :number="fret.number" :tones="fret.tones" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import Fret from '../Fret/Fret.vue';
import { DEFAULT_TONES } from '../../data/defaultTones';
import type { Tone } from '../../types/app';

const props = defineProps<{
  firstFret: number;
  lastFret: number;
}>();

const isMobile = ref(false);
const mediaSmall = 900;

const displayTones = computed<ReadonlyArray<ReadonlyArray<Tone>>>(() => {
  if (!isMobile.value) {
    return DEFAULT_TONES;
  }

  return DEFAULT_TONES.map((tones) => [...tones].reverse());
});

const visibleFrets = computed(() =>
  displayTones.value
    .map((tones, index) => ({
      number: index,
      tones
    }))
    .filter(
      (fret) => fret.number >= props.firstFret && fret.number <= props.lastFret
    )
);

function calcIfMobile(): void {
  isMobile.value = window.innerWidth <= mediaSmall;
}

onMounted(() => {
  calcIfMobile();
  window.addEventListener('resize', calcIfMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', calcIfMobile);
});
</script>
