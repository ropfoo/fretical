<template>
  <div class="c-home">
    <div class="c-home__menu-bar">
      <svg
        width="37"
        height="39"
        viewBox="0 0 37 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8794 6.31899L37 6.31899V3.21959e-06L5.55006e-07 0L0 6.31899L8.53083 6.31899V14.6127H14.8794L14.8794 6.31899Z"
          fill="#E43F5A"
        />
        <path
          d="M14.8794 21.3266H8.53083V17.7722H14.8794V21.3266Z"
          fill="#E43F5A"
        />
        <path
          d="M14.8794 32.681H20.5335V39H3.17426L3.17426 32.681H8.53083V24.4861H14.8794V32.681Z"
          fill="#E43F5A"
        />
        <path
          d="M37 19.2038C37 24.1932 32.9364 28.238 27.9236 28.238C24.8922 28.238 22.2079 26.7588 20.5595 24.4861H24.3029C25.1795 24.4861 25.8901 23.7788 25.8901 22.9063C25.8901 22.0339 25.1795 21.3266 24.3029 21.3266H19.0992C18.9344 20.6458 18.8472 19.9349 18.8472 19.2038C18.8472 18.7166 18.8859 18.2384 18.9605 17.7722H29.6595C30.5361 17.7722 31.2466 17.0649 31.2466 16.1924C31.2466 15.3199 30.5361 14.6127 29.6595 14.6127H20.105C21.6846 11.9532 24.5948 10.1696 27.9236 10.1696C32.9364 10.1696 37 14.2144 37 19.2038Z"
          fill="#E43F5A"
        />
      </svg>
      <svg
        width="41"
        height="39"
        viewBox="0 0 41 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="34.5" cy="6.5" r="6.5" fill="#E43F5A" />
        <circle cx="6.5" cy="6.5" r="6.5" fill="#E43F5A" />
        <circle cx="34.5" cy="32.5" r="6.5" fill="#E43F5A" />
        <circle cx="6.5" cy="32.5" r="6.5" fill="#E43F5A" />
      </svg>
    </div>
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
      <nuxt-link
        @click.native="toggleShowAllTones(false)"
        to="play"
        class="c-main-menu__learn"
      >
        <img src="../assets/img/svg/learn-icon.svg" alt />
        <h1>Learn</h1>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
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
