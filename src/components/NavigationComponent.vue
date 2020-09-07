<template>
  <nav class="c-nav">
    <ul class="c-nav__list">
      <li class="c-nav__item">
        <router-link class="c-nav__link" to="/"> Home </router-link>
      </li>
      <li class="c-nav__item">
        <router-link class="c-nav__link" to="/result"> Lottery results </router-link>
      </li>
      <li class="c-nav__item c-nav__item--switch">
        <img
          class="img-fluid"
          @click="swapTheme"
          :src="isDarkModeOn ? sun : moon"
          alt="Select your favorite theme" />
      </li>
      </ul>
  </nav>
</template>

<script lang="ts">
import {
  defineComponent, Ref, ref, watch,
} from '@vue/composition-api';
import { sun, moon } from '@/assets/images';

export default defineComponent({
  name: 'Navigation',
  setup(_, { emit }) {
    const isDarkModeOn: Ref<boolean> = ref(false);

    if (localStorage.getItem('darkMode') && localStorage.getItem('darkMode') === 'dark') {
      isDarkModeOn.value = true;
      emit('theme', localStorage.getItem('darkMode'));
    }

    const swapTheme = () => {
      isDarkModeOn.value = !isDarkModeOn.value;
      localStorage.setItem('darkMode', isDarkModeOn.value ? 'dark' : 'light');
    };

    watch(isDarkModeOn, () => {
      emit('theme', localStorage.getItem('darkMode'));
    });

    return {
      sun,
      moon,
      isDarkModeOn,
      swapTheme,
    };
  },
});
</script>

<style scoped lang="scss">
  @import '../styles/components/navigation';
</style>
