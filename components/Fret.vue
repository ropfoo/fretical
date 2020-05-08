<template>
  <div>
    <div class="c-fret">
      <!-- Generate six strings -->
      <div
        :class="[number === 0 ? 'c-fret--open' : 'c-fret--style']"
        v-for="n in 6"
        :key="n"
      >
        <string
          :tone="tones[n - 1]"
          :thickness="n"
          :active="checkActive(tones[n - 1])"
        />
      </div>
      <!-- Check if there is a fretmarker beneath the string -->
      <div v-if="checkDot()" class="c-fret__circle-container">
        <div class="c-fret__circle-container--circle"></div>
      </div>
      <!-- Checkes if first or last fret to show range number -->
      <template :style="{ background: 'none' }" v-if="isFirst || isLast">
        <div class="c-fret__fret-adjust-wrapper">
          <template v-if="isFirst">
            <div v-if="buttons" class="c-fret__buttons">
              <button @click="setFirstFret(1)">+</button>
              <button v-if="number >= 1" @click="setFirstFret(-1)">-</button>
            </div>
            <div class="c-fret__number-container">
              <div class="c-fret__number-container__number">{{ number }}</div>
            </div>
          </template>
          <template v-else>
            <div v-if="buttons" class="c-fret__buttons">
              <button v-if="number < 12" @click="setLastFret(1)">+</button>
              <button @click="setLastFret(-1)">-</button>
            </div>
            <div class="c-fret__number-container">
              <div class="c-fret__number-container__number">{{ number }}</div>
            </div>
          </template>
        </div>
      </template>
      <template v-else>
        <div class="c-fret__number-container"></div>
      </template>
    </div>
  </div>
</template>

<script>
import String from '../components/String.vue';
import { mapMutations, mapGetters } from 'vuex';
export default {
  components: {
    String
  },
  props: ['number', 'tones', 'isFirst', 'isLast', 'buttons'],
  computed: mapGetters({
    activeTone: 'tones/getActiveTone',
    shownTones: 'tones/getShownTones',
    showAllTones: 'manager/getShowAllTones'
  }),
  methods: {
    checkActive(tone) {
      if (this.showAllTones) {
        if (this.activeTone.name === tone.name) {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.activeTone === tone) {
          return true;
        } else {
          return false;
        }
      }
    },
    setFirstFret(amount) {
      console.log('first');
      this.$store.commit('frets/setFirstFret', amount);
    },
    setLastFret(amount) {
      console.log('last');
      this.$store.commit('frets/setLastFret', amount);
    },
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
