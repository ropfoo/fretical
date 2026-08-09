<template>
  <div
    class="mx-auto grid h-[calc(100dvh-var(--ui-header-height)-3rem)] min-h-0 w-full max-w-[96rem] grid-rows-[auto_minmax(0,1fr)_auto] place-items-center gap-3 overflow-hidden"
  >
    <div
      class="row-start-1 flex w-full flex-col items-center justify-center text-[#589aeb]"
    >
      <h1 class="flex justify-center text-center text-4xl font-bold">
        {{ activeToneLabel }}
      </h1>
    </div>

    <Fretboard
      class="row-start-2 min-h-0 place-self-center"
      :firstFret="firstFret"
      :lastFret="lastFret"
      :show-all-tones="showAllTones"
    />

    <div class="row-start-3 grid w-full grid-cols-[1fr_auto_1fr] items-center">
      <FretRangeControl class="col-start-2 justify-self-center" />
      <div class="col-start-3 justify-self-end">
        <ExploreSettingsDropdown
          :show-all-tones="showAllTones"
          @update:show-all-tones="showAllTones = $event"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FretRangeControl from '../components/FretRangeControl/FretRangeControl.vue';
import Fretboard from '../components/Fretboard/Fretboard.vue';
import ExploreSettingsDropdown from '../components/ExploreSettingsDropdown/ExploreSettingsDropdown.vue';
import { storeToRefs } from 'pinia';
import { useFretsStore } from '../stores/frets';
import { useTonesStore } from '../stores/tones';

const { $pinia } = useNuxtApp();
const { firstFret, lastFret } = storeToRefs(useFretsStore($pinia));
const { activeToneLabel } = storeToRefs(useTonesStore($pinia));
const showAllTones = ref(false);
</script>
