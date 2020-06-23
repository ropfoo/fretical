<template>
  <div class="c-fretboard-view">
    <back-arrow :destination="'/'" />
    <div class="c-fretboard-view__active-tone">
      <h1>{{ activeTone.name }}</h1>
      <sound-toggle />
    </div>
    <filter-toggle />
    <fretboard :firstFret="firstFret" :lastFret="lastFret" :showButtons="true" />
  </div>
</template>

<script>
import Fretboard from '../components/Fretboard.vue';
import BackArrow from '../components/util/BackArrow.vue';
import SoundToggle from '../components/util/SoundToggle.vue';
import FilterToggle from '../components/util/FilterToggle.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
  components: {
    Fretboard,
    BackArrow,
    SoundToggle,
    FilterToggle
  },
  computed: mapGetters({
    activeTone: 'tones/getActiveTone',
    firstFret: 'frets/getFirstFret',
    lastFret: 'frets/getLastFret',
    filterMenu: 'manager/getFilterMenu',
    showAllTones: 'manager/getShowAllTones'
  })
};
</script>
