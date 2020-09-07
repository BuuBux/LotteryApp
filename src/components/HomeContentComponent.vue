<template>
  <div class="c-welcome__wrapper">
    <container-component>
      <row-component>
        <div class='col-12'>
          <img
            src="../assets/welcome.svg"
            alt="Welcome banner"
            title="Welcome"
            class="img-fluid c-welcome__image" />
        </div>
        <div class='col-12'>
          <h2 class="c-welcome__header"> You could be our next big winner! </h2>
          <draw-wrapper-component />
        </div>
      </row-component>
    </container-component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import DrawWrapperComponent from '@/components/DrawWrapperComponent.vue';

export default defineComponent({
  name: 'HomeContent',
  components: {
    DrawWrapperComponent,
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
  }
</style>
