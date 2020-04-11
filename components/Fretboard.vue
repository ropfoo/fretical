<template>
  <div class="c-fretboard">
    <div v-for="n in frets" :key="n">
      <fret :number="n" :tones="defaultTones[0]" />
    </div>
  </div>
</template>

<script>
import Fret from '../components/Fret.vue';
export default {
  components: {
    Fret
  },
  props: ['frets'],
  data() {
    return {
      defaultTones: [['F', 'C', 'G#', 'D#', 'A#', 'F']]
    };
  }
};
</script>
