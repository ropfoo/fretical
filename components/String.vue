<template>
  <div @click="returnTone" class="c-string">
    <hr class="line" />
    <hr class="line--shadow" />
    <div :class="[isClicked ? 'c-string__indicator' : 'c-string__indicator--hidden']">{{tone}}</div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import * as Tone from 'tone';

export default {
  props: ['tone'],
  data() {
    return {
      isClicked: false
    };
  },
  computed: mapGetters({
    sound: 'tones/getSound'
  }),
  methods: {
    returnTone() {
      console.log(this.tone);
      this.isClicked = true;
      setTimeout(() => {
        this.isClicked = false;
      }, 6000);
      this.$store.commit('tones/setActiveTone', this.tone);

      if (this.sound) {
        //create a synth and connect it to the master output (your speakers)
        const synth = new Tone.Synth().toMaster();
        synth.triggerAttackRelease(`${this.tone}`, '8n');
      }
    }
  }
};
</script>
