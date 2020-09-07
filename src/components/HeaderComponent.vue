<template>
  <header class="c-header__wrapper">
    <container-component>
      <row-component>
        <div class="col-4 c-header__logo">
          <h1>
            <router-link to="/">
              <img alt="Eurojackpot lottery" src="../assets/logo.png" class="img-fluid" />
            </router-link>
          </h1>
        </div>
        <navigation-component v-on="$listeners" class="col-8"/>
      </row-component>
    </container-component>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import NavigationComponent from '@/components/NavigationComponent.vue';

export default defineComponent({
  name: 'Header',
  components: {
    NavigationComponent,
  },
});
</script>

<style lang="scss">
  .c-header__wrapper {
    padding: 25px 0;
  }
</style>
