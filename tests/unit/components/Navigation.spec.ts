import NavigationComponent from '@/components/NavigationComponent.vue';
import { mount } from '@vue/test-utils';
import testSetup from '../testSetup';

const createWrapper = () => mount(NavigationComponent, testSetup);

describe('Testing NavigationComponent.vue', () => {
    const wrapper = createWrapper();

    it('Check route is result page', async () => {
        const routerLink = wrapper.find('.c-nav__link--result');
        await routerLink.trigger('click');
        expect(wrapper.vm.$route.path).toBe('/result');
    });

    it('Check route is home page', async () => {
        const routerLink = wrapper.find('.c-nav__link--home');
        await routerLink.trigger('click');
        expect(wrapper.vm.$route.path).toBe('/');
    });

    it('Checking is dark mode on', async () => {
        const themeSwitch = wrapper.find('.c-nav__item--switch img');
        expect(wrapper.vm.$data.isDarkModeOn).toBe(false);
        await themeSwitch.trigger('click');
        expect(wrapper.vm.$data.isDarkModeOn).toBe(true);
    });

    it('Create a snapshot', () => {
        expect(createWrapper()).toMatchSnapshot();
    });

});
