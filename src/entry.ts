import type {App} from 'vue'
import TestClient from "@/components/Test";
import Client from "@/components/Client";
// 按需引入
export {TestClient, Client};

const component = [TestClient, Client];

const Novel = {
    install(app: App) {
        component.forEach((item) => {
            console.log("___",item.__name)
            console.log(item.name)
            app.component(item.name, item);
        });
    },
};


export default Novel;