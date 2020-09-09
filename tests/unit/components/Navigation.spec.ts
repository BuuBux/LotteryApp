import NavigationComponent from '@/components/NavigationComponent.vue';
import { shallowMount } from '@vue/test-utils';
import testSetup from '../testSetup';

const createWrapper = () => shallowMount(NavigationComponent, {
  ...testSetup
});

describe('Testing NavigationComponent.vue', () => {
  const wrapper = createWrapper();

  it('Check route is result page', () => {
    const link = wrapper.find('.c-nav__link--result');
    expect(link.props('to')).toBe('/result');
  });

  it('Check route is home page', () => {
    const link = wrapper.find('.c-nav__link--home');
    expect(link.props('to')).toBe('/');
  });

  it('Checking is dark mode on', async () => {
    // const themeSwitch = wrapper.find('.c-nav__item--switch img');
    // await themeSwitch.trigger('click');
    // await wrapper.vm.$nextTick();
    // expect(wrapper.vm.$data).toBe(true);
  });

  it('Create a snapshot', () => {
    expect(createWrapper()).toMatchSnapshot();
  });
});
