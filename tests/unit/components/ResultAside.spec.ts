import ResultAside from '@/components/ResultAsideComponent.vue';
import { mount } from '@vue/test-utils';
import testSetup from '../testSetup';


const propsData = { type: 'eurojackpot' };

const createWrapper = () => mount(ResultAside, {
  ...testSetup,
  propsData,
});

describe('Testing ResultAsideComponent.vue', () => {

  it('Create a snapshot', () => {
    expect(createWrapper()).toMatchSnapshot();
  });

  it('Check is selected date is string and not null', () => {
    const wrapper = createWrapper();
    expect(wrapper.props().type).toBe('eurojackpot');
  });
});
