<template>
  <div>
    <div class="c-fret">
      <!-- Generate six strings -->
      <template v-for="n in 6">
        <string :tone="tones[n - 1]" :key="n" />
      </template>
      <!-- Check if there is a fretmarker beneath the string -->
      <div v-if="checkDot()" class="c-fret__circle-container">
        <div class="c-fret__circle-container--circle"></div>
      </div>
    </div>
    <!-- Checkes if first or last fret to show range number -->
    <div class="c-fret__number-container" v-if="isFirst || isLast">
      <div class="c-fret__number-container__number">{{ number }}</div>
    </div>
  </div>
</template>

<script>
import String from '../components/String.vue';
export default {
  components: {
    String
  },
  props: ['number', 'tones', 'isFirst', 'isLast'],
  data() {
    return {};
  },
  methods: {
    checkTones() {},
    checkDot() {
      if (
        this.number === 3 ||
        this.number === 5 ||
        this.number === 7 ||
        this.number === 9
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
