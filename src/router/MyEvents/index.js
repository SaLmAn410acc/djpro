const routes = [
  {
    path: "/myevents",
    name: "myevents",
    component: () => import("@/pages/myevents/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "My Events",
    },
  },
]

export default routes
  