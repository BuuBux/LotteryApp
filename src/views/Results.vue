<template>
  <container-component>
    <draw-result-component />
  </container-component>
</template>

<script lang="ts">

import { defineComponent } from '@vue/composition-api';
import DrawResultComponent from '@/components/DrawResultComponent.vue';
import ContainerComponent from '@/components/ContainerComponent.vue';
import RowContainer from '@/components/RowComponent.vue';

export default defineComponent({
  name: 'LotteryPage',
  components: {
    RowContainer,
    ContainerComponent,
    DrawResultComponent,
  },
});
</script>
