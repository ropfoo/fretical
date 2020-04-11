<template>
  <div>
    <fretboard :frets="fretCount" />
    <button @click="fretCount++">+</button>
    <button @click="fretCount--">-</button>
    <h1>Tone</h1>
  </div>
</template>

<script>
import Fretboard from '../components/Fretboard.vue';
export default {
  components: {
    Fretboard
  },
  data() {
    return {
      fretCount: 7
    };
  }
};
</script>
