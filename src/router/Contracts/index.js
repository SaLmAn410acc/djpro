const routes = [
  {
    path: "/contracts",
    name: "contracts",
    component: () => import("@/pages/contracts/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Contracts",
    },
  },
  {
    path: "/contract/:id",
    name: "contract-details",
    component: () => import("@/pages/contracts/Details.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Contracts",
    },
  },
  {
    path: "/contract/package-details",
    name: "contract-package-details",
    component: () => import("@/pages/contracts/PackageDetails.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Contracts",
    },
  },
]

export default routes
