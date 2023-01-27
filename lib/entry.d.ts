import type { App } from 'vue';
import Face from "./cpts/Face/Face";
import ClientOnly from "./cpts/ClientOnly/ClientOnly";
export { Face, ClientOnly };
declare const Novel: {
    install(app: App): void;
};
export default Novel;
