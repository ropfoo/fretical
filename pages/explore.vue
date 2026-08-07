<template>
  <div class="c-fretboard-view c-fretboard-view--explore">
    <div class="c-fretboard-view__active-tone">
      <h1>{{ activeTone.name }}</h1>
      <sound-toggle />
    </div>
    <fretboard :firstFret="firstFret" :lastFret="lastFret" />
    <FretRangeControl />
  </div>
</template>

<script setup lang="ts">
import FretRangeControl from '../components/FretRangeControl/FretRangeControl.vue';
import Fretboard from '../components/Fretboard/Fretboard.vue';
import SoundToggle from '../components/util/SoundToggle/SoundToggle.vue';
import { storeToRefs } from 'pinia';
import { useFretsStore } from '../stores/frets';
import { useTonesStore } from '../stores/tones';

const { $pinia } = useNuxtApp();
const { firstFret, lastFret } = storeToRefs(useFretsStore($pinia));
const { activeTone } = storeToRefs(useTonesStore($pinia));
</script>
