<template>
  <div>
    <fretboard :frets="fretCount" />
    <button @click="fretCount++">+</button>
    <button @click="fretCount--">-</button>
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
      fretCount: 5
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
