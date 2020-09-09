import ResultAside from '@/components/ResultAsideComponent.vue';
import { mount } from '@vue/test-utils';
import testSetup from '../testSetup';
import ApolloClient from 'apollo-boost';
import { provide } from '@vue/composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable';
const apolloClient = new ApolloClient({
  uri: 'https://www.lottohelden.com/graphql',
});

const propsData = { type: 'eurojackpot' };

const createWrapper = () => mount(ResultAside, {
  ...testSetup,
  propsData,
});

describe('Testing ResultAsideComponent.vue', () => {

  beforeAll(() => {
    provide(DefaultApolloClient, apolloClient)
  })

  it('Create a snapshot', () => {
    expect(createWrapper()).toMatchSnapshot();
  });

  it('Check is selected date is string and not null', () => {
    const wrapper = createWrapper();
    expect(wrapper.props().type).toBe('eurojackpot');
  });
});
