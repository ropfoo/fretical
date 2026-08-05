<template>
  <div @click="returnTone" class="c-string">
    <hr class="line" :class="'line--string-' + thickness" />
    <!-- <hr class="line--shadow" /> -->
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
import { mapGetters } from 'vuex';

export default {
  props: ['tone', 'thickness', 'active'],
  computed: mapGetters({
    sound: 'tones/getSound',
    activeTone: 'tones/getActiveTone',
    shownTones: 'tones/getShownTones',
    askedTone: 'tones/getAskedTone',
    playMode: 'manager/getPlayMode',
    toneTriggered: 'manager/getToneTriggered'
  }),
  methods: {
    async returnTone() {
      this.$store.commit('tones/setActiveTone', this.tone);
      if (this.tone.name === this.askedTone.name) {
        this.$store.commit('manager/setPaused', true);
        if (!this.toneTriggered) {
          this.$store.commit('manager/setScore', 10);
          this.$store.commit('manager/setToneTriggered', true);
        }
      }
      if (this.sound && import.meta.client) {
        const Tone = await import('tone');
        const synth = new Tone.Synth();
        if (typeof synth.toDestination === 'function') {
          synth.toDestination();
        } else {
          synth.toMaster();
        }
        synth.triggerAttackRelease(`${this.tone.name}`, '8n');
      }
    }
  }
};
</script>
