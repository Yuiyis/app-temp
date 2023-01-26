import type {App} from 'vue'
import Button from "@/components/HelloWorld.vue";
import ClientOnly from "@/components/ClientOnly.vue";
// 按需引入
export {Button};

const component = [Button];

export default {
    install(app: App) {
        component.forEach((item) => {
            app.component(item.name, item);
        });
    },
};