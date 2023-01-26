import type {App} from 'vue'
import Test from "@/components/Test";
import ClientOnly from "@/components/Client";
// 按需引入
export {Test, ClientOnly};

const component = [Test, ClientOnly];

const Novel = {
    install(app: App) {
        component.forEach((item) => {
            console.log(item.name)
            app.component(item.name, item);
        });
    },
};


export default Novel;