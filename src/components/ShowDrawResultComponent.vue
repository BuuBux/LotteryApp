<template>
  <div class="c-panel c-numbers__wrapper">
    <loading-spinner-component v-if="loading" />
    <div v-if="error" class="c-number__errors">
      {{ error }}
    </div>
    <div v-if="result && !loading" class="c-numbers__section">
      <div
        v-for="draw in result.draw.draws"
        :key="`${draw.numbers.join('')}${new Date().getTime()}`"
        class="c-numbers__element">
        <h4 class="c-numbers__header" > {{draw.seo.title}} </h4>
        <h6 class="c-numbers__date"> {{draw.date}} </h6>
        <div class="c-numbers__balls">
          <p class="c-numbers__headline"> Winning numbers </p>
          <span
            class="c-numbers__ball"
            :key="number"
            v-for="number in draw.numbers"> {{ number }} </span>
        </div>
        <div class="c-numbers__balls">
          <p class="c-numbers__headline"> Additional numbers</p>
          <span
            class="c-numbers__ball c-numbers__ball--additional"
            :key="number"
            v-for="number in draw.additionalNumbers"> {{ number }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useQuery } from '@vue/apollo-composable';
import { GET_DRAWS_RESULTS } from '@/schemas/queries';
import { DrawsResults, DrawsResultsVariables } from '@/types/drawsTypes';
import LoadingSpinnerComponent from '@/components/LoadingSpinnerComponent.vue';

export default defineComponent({
  name: 'ShowDrawResult',
  components: {
    LoadingSpinnerComponent,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    selectedDate: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { result, loading, error } = useQuery<DrawsResults>(
      GET_DRAWS_RESULTS, () => ({
        date: props.selectedDate,
        limit: 1,
        type: props.type,
      }) as DrawsResultsVariables,
    );
    return { result, loading, error };
  },
});
</script>

<style lang="scss" scoped>
  .c-numbers {
    &__balls {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      @media (min-width: 1199px) {
        @include make-col($grid, 6);
        text-align: center;
        justify-content: center;
      }
    }
    &__ball {
      margin: 15px 0;
      width: 30px;
      height: 30px;
      font: font(10, 32, 'bold');
      text-align: center;
      @include border-radius(50%);
      background: #fff;
      color: #3c3c3c;
      box-shadow: 0 2px 16px rgba(0,0,0,.15);
      @media (min-width: 1199px) {
        margin: 15px 10px;
      }
      &--additional {
        background: $golden;
      }
    }
    &__date {
      position: relative;
      padding: 10px 0 10px 5px;
      margin: 10px 0;
      width: 100%;
      border-left: 2px solid $lemon;
      &:before, &:after {
        content: '';
        left: 0;
        width: 30px;
        height: 2px;
        background: $lemon;
        display: block;
        position: absolute;
      }
      &:before { top: 0; }
      &:after { bottom: 0; }
    }
    &__headline {
      flex: 0 0 100%;
      max-width: 100%;
    }
    &__element {
      @media (min-width: 1199px) {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
</style>
