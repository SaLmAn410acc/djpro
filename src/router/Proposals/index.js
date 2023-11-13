const routes = [
  {
    path: "/proposals",
    name: "proposals",
    component: () => import("@/pages/proposals/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Proposals",
    },
  },
]

export default routes
