import ResultArticle from '@/components/ResultArticleComponent.vue';
import { mount } from '@vue/test-utils';
import testSetup from '../testSetup';
import { DefaultApolloClient } from '@vue/apollo-composable';
import ApolloClient from 'apollo-boost';
import { provide } from '@vue/composition-api';
const apolloClient = new ApolloClient({
  uri: 'https://www.lottohelden.com/graphql',
});

const propsData = { type: 'eurojackpot' };
const createWrapper = () => mount(ResultArticle, {
  ...testSetup,
  propsData,
});

describe('Testing ResultArticleComponent.vue', () => {

  beforeAll(() => {
    provide(DefaultApolloClient, apolloClient)
  })

  it('Create a snapshot', () => {
    expect(createWrapper()).toMatchSnapshot();
  });

  it('Check is selected date is string and not null', () => {
    const wrapper = createWrapper();
    console.log(wrapper.vm);
  });
});
