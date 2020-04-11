<template>
  <div class="c-fret">
    <div v-for="n in 6" :key="n">
      <string :tone="tones[n - 1]" />
    </div>
    <div v-if="checkDot()" class="c-fret__circle-container">
      <div class="c-fret__circle-container--circle"></div>
    </div>
  </div>
</template>

<script>
import String from '../components/String.vue';
export default {
  components: {
    String
  },
  props: ['number', 'tones'],
  data() {
    return {
      isFirst: false
    };
  },
  computed: {
    checkIfFirst: () => {}
  },
  methods: {
    checkTones() {},
    checkDot() {
      if (this.number === 3 || this.number === 5 || this.number === 7) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
