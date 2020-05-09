<template>
  <div @click="returnTone" class="c-string">
    <hr class="line" :class="'line--string-' + thickness" />
    <hr class="line--shadow" />
    <div
      :class="[
        active
          ? [
              playMode
                ? [
                    activeTone.name === askedTone.name
                      ? 'c-string__indicator--success'
                      : 'c-string__indicator--fail'
                  ]
                : 'c-string__indicator'
            ]
          : 'c-string__indicator--hidden'
      ]"
    >
      {{ tone.name }}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import * as Tone from 'tone';

export default {
  props: ['tone', 'thickness', 'active'],
  computed: mapGetters({
    sound: 'tones/getSound',
    activeTone: 'tones/getActiveTone',
    shownTones: 'tones/getShownTones',
    askedTone: 'tones/getAskedTone',
    playMode: 'manager/getPlayMode'
  }),
  methods: {
    returnTone() {
      this.$store.commit('tones/setActiveTone', this.tone);
      if (this.tone.name === this.askedTone.name) {
        console.log('YAAAAY');
        this.$store.commit('manager/setPaused', true);
        this.$store.commit('manager/setScore', 10);
        setTimeout(() => {
          this.$store.commit('manager/setPaused', false);
          this.$store.commit('tones/setActiveTone', { name: 'tap a string' });
        }, 2000);
      } else {
        console.log('oh no!');
      }
      if (this.sound) {
        //create a synth and connect it to the master output (your speakers)
        const synth = new Tone.Synth().toMaster();
        synth.triggerAttackRelease(`${this.tone}`, '8n');
      }
    }
  }
};
</script>
