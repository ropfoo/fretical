<template>
  <header class="c-app-header" aria-label="Page actions">
    <div v-if="$slots.actions" class="c-app-header__actions">
      <slot name="actions" />
    </div>
    <BackArrow :destination="destination" @click="emit('back')" />
  </header>
</template>

<script setup lang="ts">
import BackArrow from '../util/BackArrow/BackArrow.vue';

withDefaults(
  defineProps<{
    destination?: string;
  }>(),
  {
    destination: '/'
  }
);

const emit = defineEmits<{
  back: [];
}>();
</script>
