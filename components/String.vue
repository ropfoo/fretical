<template>
  <div @click="returnTone" class="c-string">
    <hr />
  </div>
</template>

<script>
export default {
  props: ['tone'],
  methods: {
    returnTone() {
      console.log(this.tone);
    }
  }
};
</script>
