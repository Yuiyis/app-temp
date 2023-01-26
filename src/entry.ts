import type {App} from 'vue'
import Test from "@/components/test";
import ClientOnly from "@/components/ClientOnly";
// 按需引入
export {Test, ClientOnly};

const component = [Test, ClientOnly];

const Novel = {
    install(app: App) {
        component.forEach((item) => {
            app.component(item.name, item);
        });
    },
};


export default Novel;