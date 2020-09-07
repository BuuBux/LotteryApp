<template>
  <section class="c-home__wrapper">
    <home-content-component />
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import HomeContentComponent from '@/components/HomeContentComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomePage',
  components: {
    HomeContentComponent,
  },
});
</script>

<style scoped lang="scss">
  .c-home__wrapper {
    @include centering;
  }
</style>
