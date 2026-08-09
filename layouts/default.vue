<template>
  <UApp>
    <div class="dark bg-default text-default min-h-screen">
      <AppHeader />
      <UMain>
        <UContainer class="py-2 lg:py-6">
          <slot />
        </UContainer>
      </UMain>
    </div>
  </UApp>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader/AppHeader.vue';
</script>
