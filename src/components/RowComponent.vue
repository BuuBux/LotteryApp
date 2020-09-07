<template>
  <div class="row">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Row',
});
</script>

<style scoped lang="scss">
 .row {
   display: flex;
   margin-left: -15px;
   margin-right: -15px;
 }
</style>
