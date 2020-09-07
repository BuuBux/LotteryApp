<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Container',
});
</script>

<style scoped lang="scss">
  .container {
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    @each $breakpoint, $grid-breakpoint in $grid-breakpoints {
      @media (min-width: $grid-breakpoint) {
        max-width: make-container($breakpoint, $container-max-widths);
      }
    }
  }
</style>
