import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import 'element-plus/theme-chalk/el-message.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(router).mount("#app");