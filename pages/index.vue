<template>
  <div>
    <div class="c-home__menu-bar">
      <logo />
      <menu />
    </div>
    <div class="c-home">
      <div v-if="loggedIn" class="c-home__user-content">
        <h1>Fretical</h1>
        <ul>
          <li>Stats</li>
          <li>Stats</li>
          <li>Stats</li>
        </ul>
      </div>
      <div v-else class="c-home__user-content">
        <button>Login to use Stats</button>
      </div>
      <div class="c-main-menu">
        <NuxtLink
          @click="toggleShowAllTones(true)"
          to="/explore"
          class="c-main-menu__explore"
        >
          <img src="../assets/img/svg/explore-icon.svg" alt />
          <h1>Explore</h1>
        </NuxtLink>
        <NuxtLink to="/" class="c-main-menu__chords">
          <div class="c-main-menu__chords__image-container">
            <img src="../assets/img/svg/chords-icon.svg" alt />
          </div>
          <h1>Chords</h1>
        </NuxtLink>
        <NuxtLink
          @click="toggleShowAllTones(false)"
          to="/play"
          class="c-main-menu__learn"
        >
          <img src="../assets/img/svg/learn-icon.svg" alt />
          <h1>Learn</h1>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '../components/util/Logo/Logo.vue';
import Menu from '../components/util/Menu/Menu.vue';
import { ref } from 'vue';
import { useManagerStore } from '../stores/manager';

const { $pinia } = useNuxtApp();
const managerStore = useManagerStore($pinia);
const loggedIn = ref(false);

function toggleShowAllTones(status: boolean): void {
  managerStore.toggleShowAllTones(status);
}
</script>
