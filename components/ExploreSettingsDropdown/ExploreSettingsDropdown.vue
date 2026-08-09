<template>
  <UDropdownMenu
    :items="items"
    :content="{ align: 'end', side: 'top', sideOffset: 10 }"
    :modal="false"
    checked-icon="i-lucide-check"
    :ui="{
      content: 'w-60',
      item: 'cursor-pointer'
    }"
  >
    <UButton
      aria-label="Settings"
      class="rounded-full shadow-sm"
      color="neutral"
      icon="i-lucide-settings-2"
      size="sm"
      variant="soft"
    />
  </UDropdownMenu>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import type { DropdownMenuItem } from '@nuxt/ui';
import { useTonesStore } from '../../stores/tones';

const { $pinia } = useNuxtApp();
const tonesStore = useTonesStore($pinia);
const { sound } = storeToRefs(tonesStore);

const props = defineProps<{
  showAllTones: boolean;
}>();

const emit = defineEmits<{
  'update:showAllTones': [value: boolean];
}>();

const items = computed<DropdownMenuItem[][]>(() => [
  [
    {
      label: 'Settings',
      type: 'label'
    },
    {
      checked: sound.value,
      icon: sound.value ? 'i-lucide-volume-2' : 'i-lucide-volume-x',
      label: 'Play sound',
      type: 'checkbox',
      onSelect: (event) => {
        event.preventDefault();
      },
      onUpdateChecked: (checked) => {
        tonesStore.toggleSound(checked);
      }
    },
    {
      checked: props.showAllTones,
      icon: 'i-lucide-map',
      label: 'Show matching notes',
      type: 'checkbox',
      onSelect: (event) => {
        event.preventDefault();
      },
      onUpdateChecked: (checked) => {
        emit('update:showAllTones', checked);
      }
    }
  ]
]);
</script>
