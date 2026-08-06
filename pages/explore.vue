<template>
  <div class="c-fretboard-view">
    <back-arrow :destination="'/'" />
    <div class="c-fretboard-view__active-tone">
      <h1>{{ activeTone.name }}</h1>
      <sound-toggle />
    </div>
    <filter-toggle />
    <fretboard
      :firstFret="firstFret"
      :lastFret="lastFret"
      :showButtons="true"
    />
  </div>
</template>

<script setup lang="ts">
import Fretboard from '../components/Fretboard.vue';
import BackArrow from '../components/util/BackArrow.vue';
import SoundToggle from '../components/util/SoundToggle.vue';
import FilterToggle from '../components/util/FilterToggle.vue';
import { storeToRefs } from 'pinia';
import { useFretsStore } from '../stores/frets';
import { useTonesStore } from '../stores/tones';

const { $pinia } = useNuxtApp();
const { firstFret, lastFret } = storeToRefs(useFretsStore($pinia));
const { activeTone } = storeToRefs(useTonesStore($pinia));
</script>
