<template>
  <div>
    <svg
      v-if="direction === 'up'"
      width="25"
      height="16"
      viewBox="0 0 25 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 14L12.5 3L2.00002 14"
        stroke="#E43F5A"
        stroke-width="5"
        stroke-linejoin="round"
      />
    </svg>
    <svg
      v-if="direction === 'down'"
      width="25"
      height="16"
      viewBox="0 0 25 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.99999 2L12.5 13L23 2"
        stroke="#E43F5A"
        stroke-width="5"
        stroke-linejoin="round"
      />
    </svg>

    <svg
      v-if="direction === 'left'"
      width="16"
      height="25"
      viewBox="0 0 16 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 2L3.00002 12.5L14 23"
        stroke="#E43F5A"
        stroke-width="5"
        stroke-linejoin="round"
      />
    </svg>
    <svg
      v-if="direction === 'right'"
      width="16"
      height="25"
      viewBox="0 0 16 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.00002 23L13 12.5L2.00002 2"
        stroke="#E43F5A"
        stroke-width="5"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: ['direction']
};
</script>
