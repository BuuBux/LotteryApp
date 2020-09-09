import HomeContent from '@/components/HomeContentComponent.vue';
import { mount } from '@vue/test-utils';
import testSetup from '../testSetup';

const createWrapper = () => mount(HomeContent, testSetup);

describe('Testing HomeContentComponent.vue', () => {
  it('Create a snapshot', () => {
    expect(createWrapper()).toMatchSnapshot();
  });

  it('Check routing', async () => {
    const wrapper = createWrapper();
    const btn = wrapper.find('.c-welcome__button');
    await btn.trigger('click');
    expect(wrapper.vm.$route.path).toBe('/result');
  });
});
