<template>
  <div>
    <fretboard :frets="fretCount" />
    <button @click="fretCount++">+</button>
    <button @click="fretCount--">-</button>
    <h1>{{ activeTone }}</h1>
  </div>
</template>

<script>
import Fretboard from '../components/Fretboard.vue';
import { mapGetters } from 'vuex';

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
    activeTone: 'tones/getActiveTone'
  })
};
</script>
