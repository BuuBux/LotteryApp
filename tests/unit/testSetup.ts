import { createLocalVue } from '@vue/test-utils';
import VueCompositionApi, { provide } from '@vue/composition-api';
import RowComponent from '@/components/utils/RowComponent.vue';
import ContainerComponent from '@/components/utils/ContainerComponent.vue';
import ApolloClient from 'apollo-boost';
import { DefaultApolloClient } from '@vue/apollo-composable';
import router from '@/router';
import 'cross-fetch/polyfill';
const apolloClient = new ApolloClient({
  uri: 'https://www.lottohelden.com/graphql',
});

const localVue = createLocalVue();

const app = new localVue({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
})

localVue.use(VueCompositionApi);

export default {
  app,
  stubs: {
    'row-component': RowComponent,
    'container-component': ContainerComponent,
  },
  router,
};
