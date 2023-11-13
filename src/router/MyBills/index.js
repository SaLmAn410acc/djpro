const routes = [
  {
    path: "/mybills",
    name: "mybills",
    component: () => import("@/pages/mybills/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "My Bills",
    },
  },
]
  
export default routes
    