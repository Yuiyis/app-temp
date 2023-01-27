import type {App} from 'vue'
import Face from "@/cpts/Face/Face.vue";
import ClientOnly from "@/cpts/ClientOnly/ClientOnly.vue";
// 按需引入
export {Face, ClientOnly};

const component = [Face, ClientOnly];
// 全量引入
const Novel = {
    install(app: App) {
        component.forEach((item) => {
            let name = item.__name as string;
            console.log(name)
            app.component(name, item);
        });
    },
};


export default Novel;