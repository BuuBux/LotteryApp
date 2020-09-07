<template>
  <div class="theme" :class="theme" id="app">
    <header-component @theme="toggleTheme" />
    <div class="main">
      <router-view/>
    </div>
    <footer-component />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from '@vue/composition-api';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  setup() {
    const theme: Ref<string> = ref('light');
    const toggleTheme = (value: string) => {
      console.log('odbieram wartość', value);
      theme.value = value;
    };
    return { theme, toggleTheme };
  },
});
</script>

<style lang="scss">

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $gray;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: $dark;
  &.dark {
    background: $dark;
    color: $dark-font;
    a {
      color: $dark-font;
    }
  }
}

.main {
  flex-grow: 1;
}

a {
  color: $dark;
}

</style>
