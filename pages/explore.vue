<template>
  <div class="c-fretboard-view">
    <nuxt-link class="c-fretboard-view__back-button" to="/">
      <svg
        width="21"
        height="16"
        viewBox="0 0 21 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.7071 8.70711C21.0976 8.31659 21.0976 7.68342 20.7071 7.2929L14.3431 0.928935C13.9526 0.53841 13.3195 0.53841 12.9289 0.928934C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-1.66103e-07 9L20 9L20 7L1.66103e-07 7L-1.66103e-07 9Z"
          fill="#E43F5A"
        />
      </svg>
    </nuxt-link>
    <div class="c-fretboard-view__active-tone">
      <h1>{{ activeTone.name }}</h1>
      <div
        @click="toggleSound"
        class="c-fretboard-view__toggle-sound"
        :class="[
          sound
            ? 'c-fretboard-view__toggle-sound--on'
            : 'c-fretboard-view__toggle-sound--off'
        ]"
      >
        <svg
          version="1.2"
          baseProfile="tiny"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M19.707 5.293c-.391-.391-1.023-.391-1.414 0l-1.551 1.551c-.345-.688-.987-1.02-1.604-1.02-.449 0-.905.152-1.356.453l-2.672 1.781c-.753.503-2.206.942-3.11.942-1.654 0-3 1.346-3 3v2c0 1.237.754 2.302 1.826 2.76l-1.533 1.533c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l2.527-2.527c.697.174 1.416.455 1.875.762l2.672 1.781c.451.301.907.453 1.356.453.898 0 1.863-.681 1.863-2.176v-8.586l2.707-2.707c.391-.391.391-1.023 0-1.414zm-4.816 2.648l.104-.062.005.121v1.293l-2 2v-2.091l1.891-1.261zm-7.891 4.059c0-.552.448-1 1-1 1.211 0 2.907-.495 4-1.146v2.439l-2.83 2.83c-.413-.077-.814-.123-1.17-.123-.552 0-1-.448-1-1v-2zm3.301 3.406l1.699-1.699v2.439c-.481-.287-1.075-.542-1.699-.74zm4.693 2.714l-.104-.062-1.89-1.26v-4.091l2-2v7.293l-.006.12z"
          />
        </svg>
        <svg
          version="1.2"
          baseProfile="tiny"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              d="M16.706 10.292c-.389-.389-1.023-.391-1.414.002-.39.391-.39 1.023.002 1.414.345.345.535.803.535 1.291 0 .489-.19.948-.536 1.294-.391.39-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293c.724-.723 1.122-1.685 1.122-2.708s-.398-1.984-1.123-2.707zM18.706 8.292c-.391-.389-1.023-.39-1.414.002-.39.391-.39 1.024.002 1.414.879.877 1.363 2.044 1.364 3.287.001 1.246-.484 2.417-1.365 3.298-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293c1.259-1.259 1.952-2.933 1.951-4.713-.001-1.777-.694-3.447-1.952-4.702zM20.706 6.292c-.391-.389-1.023-.39-1.414.002-.39.391-.39 1.024.002 1.414 1.412 1.409 2.191 3.285 2.192 5.284.002 2.002-.777 3.885-2.193 5.301-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293c1.794-1.794 2.781-4.18 2.779-6.717-.001-2.533-.989-4.912-2.78-6.698zM12.138 5.824c-.449 0-.905.152-1.356.453l-2.673 1.782c-.752.502-2.205.941-3.109.941-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3 .904 0 2.357.439 3.109.941l2.672 1.781c.451.301.907.453 1.356.453.898.001 1.863-.68 1.863-2.175v-10c0-1.495-.965-2.176-1.862-2.176zm-7.138 9.176c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1 1.211 0 2.907-.495 4-1.146v6.293c-1.093-.652-2.789-1.147-4-1.147zm7 3l-.006.12-.104-.062-1.89-1.26v-7.596l1.891-1.261.104-.062.005.121v10z"
            />
          </g>
        </svg>
      </div>
    </div>
    <div @click="toggleFilterMenu" class="c-filter-menu__button">
      <svg
        width="50"
        height="26"
        viewBox="0 0 50 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="50" height="4" rx="2" fill="#E43F5A" />
        <rect x="8" y="11" width="35" height="4" rx="2" fill="#E43F5A" />
        <rect x="15" y="22" width="20" height="4" rx="2" fill="#E43F5A" />
      </svg>
    </div>
    <div v-if="filterMenu" class="c-filter-menu">
      <p @click="toggleShowAllTones">show all tones</p>
    </div>
    <fretboard
      :firstFret="firstFret"
      :lastFret="lastFret"
      :showButtons="true"
    />
  </div>
</template>

<script>
import Fretboard from '../components/Fretboard.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
  components: {
    Fretboard
  },
  computed: mapGetters({
    activeTone: 'tones/getActiveTone',
    sound: 'tones/getSound',
    firstFret: 'frets/getFirstFret',
    lastFret: 'frets/getLastFret',
    filterMenu: 'manager/getFilterMenu',
    showAllTones: 'manager/getShowAllTones'
  }),
  methods: {
    toggleShowAllTones() {
      this.$store.commit('manager/toggleShowAllTones', !this.showAllTones);
    },
    toggleSound() {
      this.$store.commit('tones/toggleSound', !this.sound);
    },
    toggleFilterMenu() {
      this.$store.commit('manager/toggleFilterMenu', !this.filterMenu);
    }
  }
};
</script>
