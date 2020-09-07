<template>
  <container-component>
    <row-container>
      <draw-result-component
        class="my-3 h-100 col-4"
        :draw="draw"
        :key="draw"
        v-for="draw in draws" />
    </row-container>
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
  props: {
    draws: {
      type: Array,
      required: true,
    },
  },
  setup(_, ctx) {
    const route = ctx.root.$route;
    const { draw } = route.query;
    console.log(draw);
  },
});
</script>
