<template>
  <div class="col-12 c-information__wrapper">
    <row-component>
      <div class="col-12">
        <h3 class="c-information__header"> Lottery information </h3>
      </div>
    </row-component>
    <row-component>
        <div
        v-for="information in informations"
        :key="information.title"
        class="col-3 c-information__item">
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
  .dark {
    .c-information {
      &__wrapper {
        background: #000;
      }
    }
  }
  .light {
    .c-information {
      &__wrapper {
        background: #fff;
      }
    }
  }
  .c-information {
    &__wrapper {
      padding: 25px;
      box-shadow: 0 4px 12px 3px rgba(#000, 0.1);
      @include border-radius(14px);
      text-align: center;
    }
    &__header {
      font: font(32, 48, 'light');
      margin: 0 auto 35px;
      display: inline-block;
    }
    &__image, &__title {
      margin: 0 0 10px;
    }

  }
</style>
