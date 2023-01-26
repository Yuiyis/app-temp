import type { App } from 'vue';
import Test from './components/Test';
import ClientOnly from './components/Client';
export { Test, ClientOnly };
declare const Novel: {
    install(app: App): void;
};
export default Novel;
