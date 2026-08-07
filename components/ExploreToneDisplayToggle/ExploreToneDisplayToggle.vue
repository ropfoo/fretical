<template>
  <UCheckbox
    v-model="showMatchingNotes"
    class="shrink-0 rounded-full border border-default/60 bg-elevated/70 px-3 py-1.5 shadow-sm"
    label="All matching notes"
    size="sm"
    :ui="{
      root: 'items-center gap-2',
      base: 'size-4 border border-red-400 bg-default ring-0 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500',
      indicator: 'text-white',
      icon: 'size-3 stroke-[4]',
      label:
        'cursor-pointer text-xs font-bold uppercase tracking-[0.16em] text-muted'
    }"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useManagerStore } from '../../stores/manager';

const { $pinia } = useNuxtApp();
const managerStore = useManagerStore($pinia);
const { showAllTones } = storeToRefs(managerStore);

const showMatchingNotes = computed({
  get: () => showAllTones.value,
  set: (value: boolean | 'indeterminate') => {
    managerStore.toggleShowAllTones(value === true);
  }
});
</script>
