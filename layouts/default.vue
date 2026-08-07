<template>
  <UApp>
    <div class="dark min-h-screen bg-default text-default">
      <AppHeader />
      <UMain>
        <UContainer class="py-6">
          <slot />
        </UContainer>
      </UMain>
    </div>
  </UApp>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader/AppHeader.vue';
</script>
