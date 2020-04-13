<template>
  <div class="c-fretboard">
    <div v-for="n in frets" :key="n">
      <fret v-if="n === 1" :isFirst="true" :isLast="false" :number="n" :tones="defaultTones[n-1]" />
      <fret
        v-else-if="n === frets"
        :isFirst="false"
        :isLast="true"
        :number="n"
        :tones="defaultTones[n-1]"
      />
      <fret v-else :isFirst="false" :isLast="false" :number="n" :tones="defaultTones[n-1]" />
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
