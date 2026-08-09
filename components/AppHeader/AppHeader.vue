<template>
  <UHeader title="Fretical" to="/" :toggle="false" :ui="headerUi">
    <template #left>
      <NuxtLink aria-label="Fretical home" to="/" @click="handleLogoSelect">
        <Logo />
      </NuxtLink>
    </template>

    <div v-if="$slots.actions" class="c-app-header__actions">
      <slot name="actions" />
    </div>

    <template #right>
      <UButton
        :aria-label="sidebarOpen ? 'Close navigation' : 'Open navigation'"
        color="neutral"
        icon="i-lucide-menu"
        size="xl"
        square
        variant="ghost"
        @click="toggleSidebar"
      />
    </template>
  </UHeader>

  <USlideover
    v-model:open="sidebarOpen"
    close
    side="right"
    title="Navigation"
    :ui="slideoverUi"
  >
    <template #body>
      <USidebar collapsible="none" side="right" :ui="sidebarUi">
        <template #header>
          <span>Fretical</span>
        </template>

        <UNavigationMenu
          :items="navigationItems"
          orientation="vertical"
          :ui="navigationUi"
        />
      </USidebar>
    </template>
  </USlideover>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { NavigationMenuItem } from '@nuxt/ui';
import Logo from '../util/Logo/Logo.vue';
import { useManagerStore } from '../../stores/manager';

const headerUi = {
  container: 'max-w-none px-4 sm:px-6 lg:px-8'
};

const slideoverUi = {
  content: 'w-72 max-w-[calc(100%-2rem)] bg-default',
  body: 'p-0'
};

const sidebarUi = {
  root: 'h-full w-full border-0',
  body: 'p-4'
};

const navigationUi = {
  link: 'p-1.5 overflow-hidden'
};

const { $pinia } = useNuxtApp();
const route = useRoute();
const managerStore = useManagerStore($pinia);
const sidebarOpen = ref(false);

const navigationItems: NavigationMenuItem[] = [
  {
    label: 'Explore',
    icon: 'i-lucide-search',
    to: '/explore',
    onSelect: setExploreMode
  },
  {
    label: 'Learn',
    icon: 'i-lucide-graduation-cap',
    to: '/play',
    onSelect: setPlayMode
  },
  {
    label: 'Chords',
    icon: 'i-lucide-music',
    disabled: true
  }
];

function toggleSidebar(): void {
  sidebarOpen.value = !sidebarOpen.value;
}

function handleLogoSelect(): void {
  sidebarOpen.value = false;

  if (route.path === '/play') {
    managerStore.setPlayMode(false);
  }
}

function setExploreMode(): void {
  sidebarOpen.value = false;
}

function setPlayMode(): void {
  sidebarOpen.value = false;
}
</script>
