<template>
  <div class="c-fretboard">
    <div v-for="n in frets" :key="n">
      <fret :number="n" :tones="defaultTones[n-1]" />
    </div>
  </div>
</template>

<script>
import Fret from '../components/Fret.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Fret
  },
  props: ['frets'],
  computed: mapGetters({
    defaultTones: 'tones/getDefaultTones'
  })
};
</script>
