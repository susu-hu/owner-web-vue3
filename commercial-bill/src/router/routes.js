import homeIndex from "@/views/index.vue";
const routes = [
  {
    path: "/",
    redirect: "index",
  },
  {
    name: "index",
    path: "/index",
    component: homeIndex,
    meta: {
      title: "首页",
    },
  },
];

export default routes;
