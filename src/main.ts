import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueCompositionAPI, { provide } from '@vue/composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable';
import RowComponent from '@/components/utils/RowComponent.vue';
import ContainerComponent from '@/components/utils/ContainerComponent.vue';
import router from './router';
import App from './App.vue';

const apolloClient = new ApolloClient({
  uri: 'https://www.lottohelden.com/graphql',
});

Vue.use(VueCompositionAPI);
Vue.component('row-component', RowComponent);
Vue.component('container-component', ContainerComponent);
Vue.config.productionTip = false;

new Vue({
  router,
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: (h) => h(App),
}).$mount('#app');
