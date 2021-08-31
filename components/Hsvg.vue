<template>
  <svg
    id="Layer_1"
    :class="cl"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 324.25 8.5"
  >
    <defs>
      <style>
        .cls-1 {
          fill: none;
          stroke: #fcd3a8;
          stroke-miterlimit: 10;
          stroke-width: 0.5px;
        }
        .cls-2 {
          fill: #fcd3a8;
        }
      </style>
    </defs>
    <path class="cls-1" d="M0,4.33H316.21" transform="translate(0 -0.08)" />
    <circle class="cls-2" cx="320" cy="4.25" r="2.5" />
    <circle class="cls-1" cx="320" cy="4.25" r="4" />
  </svg>
</template>

<script>
export default {
  props: {
    cl: String,
  },
};
</script>