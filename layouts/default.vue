<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      isMobile: false,
      screenWidth: 0,
      mediaSmall: 550
    };
  },
  computed: mapGetters({
    defaultTones: 'tones/getDefaultTones'
  }),
  mounted() {
    this.calcIfMobile();
    window.addEventListener('resize', () => {
      this.calcIfMobile();
    });
  },
  watch: {
    isMobile: function() {
      this.$store.commit('tones/reverseDefaultTones', this.defaultTones);
    }
  },
  methods: {
    calcIfMobile() {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth <= this.mediaSmall) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  }
};
</script>
