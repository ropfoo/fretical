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
        <nuxt-link
          @click.native="toggleShowAllTones(true)"
          to="explore"
          class="c-main-menu__explore"
        >
          <img src="../assets/img/svg/explore-icon.svg" alt />
          <h1>Explore</h1>
        </nuxt-link>
        <nuxt-link to="/" class="c-main-menu__chords">
          <div class="c-main-menu__chords__image-container">
            <img src="../assets/img/svg/chords-icon.svg" alt />
          </div>
          <h1>Chords</h1>
        </nuxt-link>
        <nuxt-link @click.native="toggleShowAllTones(false)" to="play" class="c-main-menu__learn">
          <img src="../assets/img/svg/learn-icon.svg" alt />
          <h1>Learn</h1>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../components/util/Logo.vue';
import Menu from '../components/util/Menu.vue';

import { mapGetters, mapMutations } from 'vuex';
export default {
  components: {
    Logo,
    Menu
  },
  data() {
    return {
      loggedIn: false
    };
  },

  methods: {
    toggleShowAllTones(status) {
      this.$store.commit('manager/toggleShowAllTones', status);
    }
  }
};
</script>
