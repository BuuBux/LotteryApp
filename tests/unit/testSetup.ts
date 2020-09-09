import { createLocalVue } from '@vue/test-utils';
import CompositionApi from '@vue/composition-api';
import RowComponent from '@/components/utils/RowComponent.vue';
import ContainerComponent from '@/components/utils/ContainerComponent.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
const router = new VueRouter();

localVue.use(CompositionApi);
localVue.use(VueRouter);
localVue.component('container-component', ContainerComponent);
localVue.component('row-component', RowComponent);

export default {
  localVue,
  router,
};
