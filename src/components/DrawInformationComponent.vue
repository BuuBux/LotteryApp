<template>
  <div class="col-12 c-information__wrapper c-panel">
    <row-component>
      <div class="col-12">
        <h3 class="c-information__header"> Lottery information </h3>
      </div>
    </row-component>
    <row-component>
      <div
      v-for="information in informations"
      :key="information.title"
      class="col-6 c-information__item">
        <img
          class="c-information__image"
          :alt="information.title"
          :title="information.title"
          :src="require(`../assets/${information.img}`)" />
        <h4 class="c-information__title"> {{information.title}} </h4>
        <p class="c-information__text"> {{information.text}} </p>
      </div>
    </row-component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Information from '@/types/informationTypes';

export default defineComponent({
  name: 'DrawInformation',
  setup() {
    const informations: Information[] = [
      {
        title: 'Rules:',
        img: 'rules.svg',
        text: '5 out of 50 plus 2 out of 10 Euro numbers',
      },
      {
        title: 'Drawing:',
        img: 'drawing.svg',
        text: 'Every Friday at 20:00 CET',
      },
      {
        title: 'Winning odds:',
        img: 'odds.svg',
        text: '1 in 95 million',
      },
      {
        title: 'Jackpot amount:',
        img: 'jackpot.svg',
        text: 'Up to 90 million € jackpot',
      },
    ];
    return { informations };
  },
});
</script>

<style lang="scss" scoped>
  .c-information {
    &__wrapper {
      text-align: center;
      margin: 0 0 25px 0;
    }
    &__header {
      font: font(32, 48, 'light');
      margin: 0 auto 35px;
      display: inline-block;
    }
    &__image, &__title {
      margin: 0 0 10px;
    }
    &__item {
      margin: 15px 0;
      @media (min-width: 991px) {
        @include make-col($grid, 3);
      }
    }
  }
</style>
