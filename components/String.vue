<template>
  <div @click="returnTone" class="c-string">
    <hr />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import * as Tone from 'tone';

export default {
  props: ['tone'],
  computed: mapGetters({
    sound: 'tones/getSound'
  }),
  methods: {
    returnTone() {
      console.log(this.tone);
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
