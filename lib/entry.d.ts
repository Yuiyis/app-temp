import type { App } from 'vue';
import HelloWorld from './components/HelloWorld';
import ClientOnly from './components/ClientOnly';
export { HelloWorld, ClientOnly };
declare const MukUI: {
    install(app: App): void;
};
export default MukUI;
