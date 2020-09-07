<template>
  <div class="c-welcome__wrapper col-1">
    <h1 class="c-welcome__header col-2">
      We have a lot of draws for you!
    </h1>
    <h2 class="c-welcome__subheader">
      Let's just jump into it
    </h2>
    <draw-wrapper-component />
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

<style scoped lang="scss"> </style>
