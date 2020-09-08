<template>
  <container-component>
    <row-component class="c-home__wrapper">
      <home-content-component />
    </row-component>
  </container-component>
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
  .c-home {
    &__wrapper {
      @include centering;
    }
  }
</style>
