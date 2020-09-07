<template>
  <row-component>
    <div class="aside col-12">
      <draw-dates-component @selectedDate="updateDate" :type="lotteryType" />
    </div>
    <div class="main-content col-12">
      <show-draw-result-component :type="lotteryType" :selected-date="selectedDate" />
    </div>
  </row-component>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from '@vue/composition-api';
import ShowDrawResultComponent from '@/components/ShowDrawResultComponent.vue';
import DrawDatesComponent from '@/components/DrawDatesComponent.vue';

export default defineComponent({
  name: 'DrawResult',
  components: {
    DrawDatesComponent,
    ShowDrawResultComponent,
  },
  setup() {
    const lotteryType = 'eurojackpot';
    const selectedDate: Ref<string> = ref('');
    const updateDate = (value: string) => {
      selectedDate.value = value;
    };
    return { lotteryType, selectedDate, updateDate };
  },
});

</script>

<style scoped lang="scss">
  .main-content {
    margin-top: 25px;
  }
  @media (min-width: 768px) {
    .aside {
      &.col-12 {
        @include make-col($grid, 5);
      }
    }
    .main-content {
      margin-top: 0;
      &.col-12 {
        @include make-col($grid, 7);
      }
    }
  }
</style>
