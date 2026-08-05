<template>
  <div class="c-fretboard">
    <template v-for="n in lastFret" :key="n">
      <fret
        v-if="n >= firstFret"
        :isFirst="n === firstFret"
        :isLast="n === lastFret"
        :number="n - 1"
        :tones="defaultTones[n - 1]"
        :buttons="showButtons"
      />
    </template>
  </div>
</template>

<script>
import Fret from '../components/Fret.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Fret
  },
  props: ['firstFret', 'lastFret', 'showButtons'],
  data() {
    return {
      isMobile: false,
      screenWidth: 0,
      mediaSmall: 567
    };
  },
  computed: mapGetters({
    defaultTones: 'tones/getDefaultTones'
  })
};
</script>
