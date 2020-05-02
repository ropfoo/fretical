<template>
  <div class="c-fretboard">
    <template v-for="n in lastFret">
      <fret
        v-if="n === firstFret && n >= firstFret"
        :isFirst="true"
        :isLast="false"
        :number="n - 1"
        :tones="defaultTones[n - 1]"
        :key="n"
      />
      <fret
        v-else-if="n === lastFret && n >= firstFret"
        :isFirst="false"
        :isLast="true"
        :number="n - 1"
        :tones="defaultTones[n - 1]"
        :key="n"
      />
      <fret
        v-else-if="n >= firstFret"
        :isFirst="false"
        :isLast="false"
        :number="n - 1"
        :tones="defaultTones[n - 1]"
        :key="n"
      />
    </template>
  </div>
</template>

<script>
import Fret from '../components/Fret.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: {
    Fret
  },
  props: ['firstFret', 'lastFret'],
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
