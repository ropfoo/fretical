<template>
  <div>
    <div class="c-fretboard">
      <div v-for="n in 8" :key="n">
        <Fret :number="n" />
      </div>
    </div>
  </div>
</template>

<script>
import Fret from '../components/Fret.vue';
export default {
  components: {
    Fret
  }
};
</script>
