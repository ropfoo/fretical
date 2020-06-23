<template>
  <div>
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
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: mapGetters({
    filterMenu: 'manager/getFilterMenu',
    showAllTones: 'manager/getShowAllTones'
  }),
  methods: {
    toggleShowAllTones() {
      this.$store.commit('manager/toggleShowAllTones', !this.showAllTones);
    },
    toggleFilterMenu() {
      this.$store.commit('manager/toggleFilterMenu', !this.filterMenu);
    }
  }
};
</script>

