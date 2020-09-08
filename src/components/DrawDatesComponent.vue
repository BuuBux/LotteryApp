<template>
  <div class="c-panel c-dates__wrapper">
    <h2 class="c-dates__header"> Check results for other dates </h2>
    <div v-if="error" class="c-dates__errors"> {{error}}} </div>
    <ul v-if="result" class="c-dates__list">
      <li
        class="c-dates__element"
        :class="{ 'active' : selectedDate === draw.date }"
        v-for="draw in result.drawDates.draws"
        @click="selectNewDate(draw.date)"
        :key="draw.date.split(' ').join('')"> {{ draw.date }} </li>
    </ul>
    <div class="c-dates__buttons">
      <button v-if="!loading" class="c-btn" @click="loadMoreDates(5)">
          Load more dates
      </button>
      <loading-spinner-component v-else />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, watch, Ref,
} from '@vue/composition-api';
import { useQuery } from '@vue/apollo-composable';
import { GET_DRAWS_DATE } from '@/schemas/queries';
import DrawsDate, { DrawsDateVariables } from '@/types/drawsTypes';
import LoadingSpinnerComponent from '@/components/LoadingSpinnerComponent.vue';

export default defineComponent({
  name: 'DrawsDates',
  components: {
    LoadingSpinnerComponent,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  setup(props, ctx) {
    const { type } = props;
    const limit = ref(1);
    const { result, loading, error } = useQuery<DrawsDate, DrawsDateVariables>(
      GET_DRAWS_DATE, { limit, type },
    );

    const selectedDate: Ref<string> = ref<string>('');
    selectedDate.value = result.value?.drawDates?.draws[0].date;
    const selectNewDate = (newDate: string) => { selectedDate.value = newDate; };
    const loadMoreDates = (extendBy: number) => { limit.value += extendBy; };
    watch(result, (value) => { selectedDate.value = value.drawDates.draws[0].date; });
    watch(selectedDate, (value) => { ctx.emit('selectedDate', value); });

    return {
      result,
      error,
      loading,
      limit,
      selectNewDate,
      loadMoreDates,
      selectedDate,
    };
  },
});
</script>

<style lang="scss" scoped>
  .c-dates {
    &__wrapper {
      @media (min-width: 768px) {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    &__element {
      transition: color 0.2s ease-in-out;
      &:not(:first-child) {
        margin: 5px 0 0 0;
      }
      padding: 5px;
      &:hover {
        font-weight: 700;
        color: $lemon;
        cursor: pointer;
      }
      &.active {
          color: $lemon;
          font-weight: 700;
        }
    }
    &__header {
      font: font(18, 24, 'light');
      text-align: center;
    }
    &__list {
      list-style: none;
      text-align: center;
      margin: 25px 0;
    }
    &__buttons {
      text-align: center;
    }
  }
</style>
