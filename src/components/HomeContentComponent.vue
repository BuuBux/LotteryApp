<template>
  <div class="c-welcome__wrapper col-12">
    <img
      src="../assets/welcome.svg"
      alt="Welcome banner"
      title="Welcome"
      class="img-fluid c-welcome__image" />
    <h2 class="c-welcome__header"> You could be our next big winner! </h2>
    <draw-information-component />
    <router-link
      to="/result"
      class="c-btn c-welcome__button"> Show me result </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import DrawInformationComponent from '@/components/DrawInformationComponent.vue';

export default defineComponent({
  name: 'HomeContent',
  components: {
    DrawInformationComponent,
  },
});
</script>

<style scoped lang="scss">
  .c-welcome {
    &__image {
      margin: 0 auto;
      display: block;
      max-height: 200px;
    }
    &__header {
      font: font(32, 48, 'normal', $fontFamilySecondary);
      margin: 25px 0;
      text-align: center;
    }
    &__button {
      max-width: 225px;
      display: block;
      text-align: center;
    }
  }
</style>
