import type {App} from 'vue'
import hButton from "@/components/HelloWorld.vue";
import cOnly from "@/components/ClientOnly.vue";
// 按需引入
export {hButton,cOnly};

const component = [hButton,cOnly];

const MukUI = {
    install(app: App) {
        component.forEach((item) => {
            app.component(item.name, item);
        });
    },
};




export default MukUI;