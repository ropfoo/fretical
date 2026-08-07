<template>
  <div @click="returnTone" class="c-string">
    <hr class="line" :class="'line--string-' + thickness" />
    <div
      :class="[
        active
          ? [
              playMode
                ? [
                    selectedCorrectTone
                      ? 'c-string__indicator--success'
                      : 'c-string__indicator--fail'
                  ]
                : 'c-string__indicator'
            ]
          : 'c-string__indicator--hidden'
      ]"
    >
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useManagerStore } from '../../stores/manager';
import { useTonesStore } from '../../stores/tones';
import type { Tone } from '../../types/app';

const props = defineProps<{
  fretNumber: number;
  label: string;
  tone: Tone;
  thickness: number;
  active: boolean;
}>();
const { $pinia } = useNuxtApp();
const managerStore = useManagerStore($pinia);
const tonesStore = useTonesStore($pinia);
const { playMode, toneTriggered } = storeToRefs(managerStore);
const { askedTone, sound } = storeToRefs(tonesStore);

const selectedCorrectTone = computed(
  () => askedTone.value?.pitchClass === props.tone.pitchClass
);

async function returnTone(): Promise<void> {
  tonesStore.setSelectedTone({
    ...props.tone,
    fret: props.fretNumber
  });

  if (selectedCorrectTone.value) {
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
    synth.triggerAttackRelease(props.tone.soundName, '8n');
  }
}
</script>
