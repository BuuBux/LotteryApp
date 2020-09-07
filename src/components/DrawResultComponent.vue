<template>
  <row-component>
    <div class="aside col-4">
      <div class="c-dates__wrapper">
        <ul>
          <li> dates </li>
        </ul>
      </div>
    </div>
    <div class="content col-8">
      <div class="c-content__wrapper">
        results!
      </div>
    </div>
  </row-component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useQuery } from '@vue/apollo-composable';
import { GET_DRAWS_RESULTS, GET_DRAWS_DATE } from '@/schemas/queries';

export default defineComponent({
  name: 'DrawResult',
  setup() {
    const type = 'eurojackpot';
    const dateLimit = 10;

    const {
      result: dateResults,
      loading: dateLoading,
      error: dateError,
    } = useQuery(GET_DRAWS_DATE, { limit: 1, type });

    const {
      result: drawsResults,
      loading: drawsLoading,
      error: drawsError,
    } = useQuery(GET_DRAWS_RESULTS, { date: dateResults, limit: dateLimit, type });

    return {
      dateResults,
      dateLoading,
      dateError,
      drawsResults,
      drawsLoading,
      drawsError,
    };
  },
});

</script>

<style scoped lang="scss">

</style>
