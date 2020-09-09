import ResultArticle from '@/components/ResultArticleComponent.vue';
import { mount } from '@vue/test-utils';
import testSetup from '../testSetup';

const propsData = { type: 'eurojackpot', selectedDate: 'Sep 04 2020' };
const createWrapper = () => mount(ResultArticle, {
  ...testSetup,
  propsData,
});

describe('Testing ResultArticleComponent.vue', () => {

  it('Create a snapshot', () => {
    expect(createWrapper()).toMatchSnapshot();
  });

  it('Check is selected date is string and not null', () => {
    const wrapper = createWrapper();
  });
});
