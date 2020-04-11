<template>
  <div class="c-fret">
    <div v-if="checkDot()" class="c-fret__circle-container">
      <div class="c-fret__circle-container--circle"></div>
    </div>
    <div v-for="n in 6" :key="n">
      <div class="c-string">
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['number'],
  methods: {
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
