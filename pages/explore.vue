<template>
  <div
    class="mx-auto grid h-[calc(100dvh-var(--ui-header-height)-3rem)] min-h-0 w-full max-w-[96rem] grid-rows-[auto_minmax(0,1fr)_auto] place-items-center gap-3 overflow-hidden px-2 py-1 sm:px-3 lg:px-4"
  >
    <div
      class="row-start-1 flex w-full flex-col items-center justify-center text-[#589aeb]"
    >
      <h1 class="mb-2 flex justify-center text-center text-4xl font-bold">
        {{ activeToneLabel }}
      </h1>
      <SoundToggle />
    </div>

    <Fretboard
      class="row-start-2 min-h-0 place-self-center"
      :firstFret="firstFret"
      :lastFret="lastFret"
    />

    <div
      class="row-start-3 flex w-full flex-wrap items-center justify-end gap-3 place-self-end"
    >
      <FretRangeControl />
      <ExploreToneDisplayToggle />
    </div>
  </div>
</template>

<script setup lang="ts">
import FretRangeControl from '../components/FretRangeControl/FretRangeControl.vue';
import Fretboard from '../components/Fretboard/Fretboard.vue';
import ExploreToneDisplayToggle from '../components/ExploreToneDisplayToggle/ExploreToneDisplayToggle.vue';
import SoundToggle from '../components/util/SoundToggle/SoundToggle.vue';
import { storeToRefs } from 'pinia';
import { useFretsStore } from '../stores/frets';
import { useTonesStore } from '../stores/tones';

const { $pinia } = useNuxtApp();
const { firstFret, lastFret } = storeToRefs(useFretsStore($pinia));
const { activeToneLabel } = storeToRefs(useTonesStore($pinia));
</script>
