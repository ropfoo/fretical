<template>
  <div>
    <fretboard :firstFret="firstFret" :lastFret="lastFret" />
    <button @click="lastFret++">last fret +</button>
    <button @click="lastFret--">last fret -</button>
    <button @click="firstFret++">first fret +</button>
    <button @click="firstFret--">first fret -</button>
    <h1>{{ activeTone }}</h1>
    <button @click="toggleSound">sound</button>
    oh nope
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
      firstFret: 3
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
