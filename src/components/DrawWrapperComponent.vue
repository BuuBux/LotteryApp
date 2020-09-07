<template>
  <container-component class="c-lottery__wrapper">
    <row-component>
      <draw-information-component />
      <router-link to="/result" class="c-btn"> Show me result </router-link>
    </row-component>
  </container-component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import DrawInformationComponent from '@/components/DrawInformationComponent.vue';

export default defineComponent({
  name: 'DrawWrapperComponent',
  components: {
    DrawInformationComponent,
  },
});
</script>

<style lang="scss">
  .c-draw {
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
    }
    &__item {
      margin: 15px 0;
    }
    &__title {
      background: #fff;
      color: $lemon;
      padding: 10px 0;
      transition: transform 0.2s ease-in-out, background 0.2s ease-in-out, color 0.2s ease-in-out;
      @include border-radius(4px);
      &:hover {
        cursor: pointer;
        transform: scale(1.05);
        background: $lemon;
        color: #fff;
      }
    }
  }
</style>
