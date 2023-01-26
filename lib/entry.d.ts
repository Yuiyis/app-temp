import type { App } from 'vue';
import Test from './components/test';
import ClientOnly from './components/ClientOnly';
export { Test, ClientOnly };
declare const Novel: {
    install(app: App): void;
};
export default Novel;
