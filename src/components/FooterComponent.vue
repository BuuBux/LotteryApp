<template>
  <footer class="c-footer">
    <container-component>
      <row-component>
        <p class="c-footer__legal col-12">
          App created with
          <span class="hearth"> ❤ </span>
          by Kamil | Results provided by
          <a
            class="c-footer__link"
            rel="noopener"
            target="_blank"
            title="Lottohelden"
            alt="Draw results comes from lottohelden"
            href="https://www.lottohelden.com/"> Lottohelden </a>
        </p>
      </row-component>
    </container-component>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Footer',
});
</script>

<style lang="scss">
  @keyframes pulse {
    from { transform: scale(1); }
    to { transform: scale(1.75); }
  }
  .c-footer {
    &__legal {
      padding: 15px 0;
      text-align: center;
      font: font(12, 16);
      .hearth {
        color: $cinnabar;
        display: inline-block;
        padding: 0 5px;
        animation: pulse 0.5s ease-in-out 0s infinite alternate-reverse;
      }
    }
    &__link {
      text-decoration: none;
      font-weight: bold;
      transition: color 0.2s ease-in-out;
      &:hover {
        color: $cinnabar !important;
      }
    }
  }
</style>
