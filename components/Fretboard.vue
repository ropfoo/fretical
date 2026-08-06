<template>
  <div class="c-fretboard">
    <template v-for="fret in visibleFrets" :key="fret.number">
      <Fret
        :isFirst="fret.fret === firstFret"
        :isLast="fret.fret === lastFret"
        :number="fret.number"
        :tones="fret.tones"
        :buttons="showButtons"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import Fret from '../components/Fret.vue';
import { DEFAULT_TONES } from '../data/defaultTones';
import type { Tone } from '../types/app';

const props = defineProps<{
  firstFret: number;
  lastFret: number;
  showButtons: boolean;
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
      fret: index + 1,
      number: index,
      tones
    }))
    .filter(
      (fret) => fret.fret >= props.firstFret && fret.fret <= props.lastFret
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
