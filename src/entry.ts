import type {App} from 'vue'
import HelloWorld from "@/components/HelloWorld";
import ClientOnly from "@/components/ClientOnly";
// 按需引入
export {HelloWorld, ClientOnly};

const component = [HelloWorld, ClientOnly];

const MukUI = {
    install(app: App) {
        component.forEach((item) => {
            app.component(item.name, item);
        });
    },
};


export default MukUI;