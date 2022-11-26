import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import 'element-plus/theme-chalk/el-message.css';
createApp(App).use(router).mount("#app");
