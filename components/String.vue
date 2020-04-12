<template>
  <div @click="returnTone" class="c-string">
    <hr />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['tone'],
  methods: {
    returnTone() {
      console.log(this.tone);
      this.$store.commit('tones/setActiveTone', this.tone);
    }
  }
};
</script>
