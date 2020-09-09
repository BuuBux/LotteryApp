<template>
  <container-component>
    <row-container>
      <result-aside-component
        @selectedDate="updateDate"
        :type="lotteryType"
        :selected-date="selectedDate"
        class="c-result__aside col-12" />
      <result-article-component
        :type="lotteryType"
        :selected-date="selectedDate"
        class="c-result__article col-12" />
    </row-container>
  </container-component>
</template>

<script lang="ts">

import { defineComponent, ref, Ref } from '@vue/composition-api';
import ContainerComponent from '@/components/utils/ContainerComponent.vue';
import RowContainer from '@/components/utils/RowComponent.vue';
import ResultArticleComponent from '@/components/ResultArticleComponent.vue';
import ResultAsideComponent from '@/components/ResultAsideComponent.vue';

export default defineComponent({
  name: 'LotteryResult',
  components: {
    RowContainer,
    ContainerComponent,
    ResultArticleComponent,
    ResultAsideComponent,
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

<style lang="scss">
  .c-result {
    &__article {
      margin-top: 25px;
      @media (min-width: 768px) {
        margin-top: 0;
        &.col-12 {
          @include make-col($grid, 7);
        }
      }
    }
    &__aside {
      @media (min-width: 768px) {
        &.col-12 {
          @include make-col($grid, 5);
        }
      }
    }
  }
</style>
