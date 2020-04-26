<template>
  <div class="c-fretboard-view">
    <div class="c-fretboard-view__active-tone">
      <h1>{{ activeTone }}</h1>
      <button @click="toggleSound">sound</button>
    </div>
    <fretboard :firstFret="firstFret" :lastFret="lastFret" />
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
    lastFret: 'frets/getLastFret'
  }),
  methods: {
    toggleSound() {
      this.$store.commit('tones/toggleSound', !this.sound);
    }
  }
};
</script>
