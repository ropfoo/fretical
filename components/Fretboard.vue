<template>
  <div class="c-fretboard">
    {{ screenWidth }}
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
      screenWidth: 0,
      isMobile: false
    };
  },
  computed: mapGetters({
    defaultTones: 'tones/getDefaultTones'
  }),
  mounted() {
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth <= 567) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  },
  watch: {
    isMobile: function() {
      this.$store.commit('tones/reverseDefaultTones', this.defaultTones);
    }
  },
  methods: {
    reverseDefaultTones() {
      this.$store.commit('tones/reverseDefaultTones', this.defaultTones);
    }
  }
};
</script>
