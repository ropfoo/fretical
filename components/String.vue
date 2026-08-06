<template>
  <div @click="returnTone" class="c-string">
    <hr class="line" :class="'line--string-' + thickness" />
    <!-- <hr class="line--shadow" /> -->
    <div
      :class="[
        active
          ? [
              playMode
                ? [
                    activeTone.name === askedTone.name
                      ? 'c-string__indicator--success'
                      : 'c-string__indicator--fail'
                  ]
                : 'c-string__indicator'
            ]
          : 'c-string__indicator--hidden'
      ]"
    >
      {{ tone.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useManagerStore } from '../stores/manager';
import { useTonesStore } from '../stores/tones';
import type { Tone } from '../types/app';

const props = defineProps<{
  tone: Tone;
  thickness: number;
  active: boolean;
}>();
const { $pinia } = useNuxtApp();
const managerStore = useManagerStore($pinia);
const tonesStore = useTonesStore($pinia);
const { playMode, toneTriggered } = storeToRefs(managerStore);
const { activeTone, askedTone, sound } = storeToRefs(tonesStore);

async function returnTone(): Promise<void> {
  tonesStore.setActiveTone(props.tone);
  if (props.tone.name === askedTone.value.name) {
    managerStore.setPaused(true);
    if (!toneTriggered.value) {
      managerStore.setScore(10);
      managerStore.setToneTriggered(true);
    }
  }
  if (sound.value && import.meta.client) {
    const Tone = await import('tone');
    const synth = new Tone.Synth();
    if (typeof synth.toDestination === 'function') {
      synth.toDestination();
    } else {
      synth.toMaster();
    }
    synth.triggerAttackRelease(`${props.tone.name}`, '8n');
  }
}
</script>
