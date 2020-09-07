<template>
  <div class="section">
    <b-card
      class="h-100"
      :key="`${draw.date.toLowerCase().split(' ').join('')}${draw.numbers.join()}}`"
      v-for="draw in this.result.draw.draws">
      <b-card-header> {{ draw.seo.title }} </b-card-header>
      <b-card-text>
        <div class="">
          <p> {{ draw.numbers.join(' ') }} </p>
        </div>
      </b-card-text>
      <b-card-footer> {{ draw.date }} </b-card-footer>
    </b-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useQuery } from '@vue/apollo-composable';
import { GET_DRAWS_RESULTS } from '@/schemas/queries';

export default defineComponent({
  name: 'DrawResult',
  props: {
    draw: {
      type: String,
      required: true,
    },
  },
  setup(props, ctx) {
    const { draw } = ctx.root.$route.query;
    const date = '';
    const limit = 1;

    if (draw) {
      const { result, loading, error } = useQuery(
        GET_DRAWS_RESULTS, {
          date,
          limit,
          type: draw,
        },
      );
      return { result, loading, error };
    }

    const { draw: drawLottery } = props;
    const { result, loading, error } = useQuery(
      GET_DRAWS_RESULTS, {
        date,
        limit,
        type: drawLottery,
      },
    );
    return { result, loading, error };
  },
});

</script>

<style scoped lang="scss">

</style>
