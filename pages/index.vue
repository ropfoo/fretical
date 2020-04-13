<template>
  <div class="c-fretboard-view">
    <h1 class="c-fretboard-view__active-tone">{{ activeTone }}</h1>
    <fretboard :firstFret="firstFret" :lastFret="lastFret" />
    <div class="c-fretboard-view__fretboard-adjust">
      <div>
        <button @click="firstFret++">first fret +</button>
        <button @click="firstFret--">first fret -</button>
      </div>
      <div>
        <button @click="lastFret++">last fret +</button>
        <button @click="lastFret--">last fret -</button>
      </div>
    </div>

    <button @click="toggleSound">sound</button>
  </div>
</template>

<script>
import Fretboard from '../components/Fretboard.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
  components: {
    Fretboard
  },
  data() {
    return {
      lastFret: 5,
      firstFret: 1
    };
  },
  computed: mapGetters({
    activeTone: 'tones/getActiveTone',
    sound: 'tones/getSound'
  }),
  methods: {
    toggleSound() {
      this.$store.commit('tones/toggleSound', !this.sound);
    }
  }
};
</script>
