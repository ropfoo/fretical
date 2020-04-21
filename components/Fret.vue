<template>
  <div>
    <div class="c-fret">
      <!-- Generate six strings -->
      <div :class="[number === 0 ? 'c-fret--open' : 'c-fret--style']" v-for="n in 6" :key="n">
        <string :tone="tones[n - 1]" />
      </div>
      <!-- Check if there is a fretmarker beneath the string -->
      <div v-if="checkDot()" class="c-fret__circle-container">
        <div class="c-fret__circle-container--circle"></div>
      </div>
      <!-- Checkes if first or last fret to show range number -->
      <div class="c-fret__number-container" :style="{background: 'none'}" v-if="isFirst || isLast">
        <div class="c-fret__number-container__number">{{ number }}</div>
      </div>
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
  methods: {
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
