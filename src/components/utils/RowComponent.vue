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
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
</style>
