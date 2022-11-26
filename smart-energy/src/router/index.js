import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const title = "智慧能源" + (to.meta.title ? "-" + to.meta.title : "");
  document.title = title;
  next();
});
export default router;
