<template>
  <header class="c-header__wrapper">
    <container-component>
      <row-component>
        <div class="col-12 c-header__logo">
          <h1>
            <router-link to="/">
              <img alt="Eurojackpot lottery" src="../assets/logo.png" class="img-fluid" />
            </router-link>
          </h1>
        </div>
        <navigation-component v-on="$listeners" class="col-12 c-header__nav"/>
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
  .c-header {
    &__wrapper {
      padding: 25px 0;
      text-align: center;
    }
    @media (min-width: 768px) {
      &__logo {
        &.col-12 {
          @include make-col($grid, 4);
        }
      }
      &__nav {
        &.col-12 {
          @include make-col($grid, 8);
        }
      }
    }
  }
</style>
