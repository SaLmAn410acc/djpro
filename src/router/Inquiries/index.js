const routes = [
  {
    path: "/inquiries",
    name: "inquiries",
    component: () => import("@/pages/inquiries/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Inquiries",
    },
  },
  {
    path: "/inquiries/inquiry/:id",
    name: "inquiries-inquiry",
    component: () => import("@/pages/inquiries/inquiry/index.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Inquiries",
    },
  },
  {
    path: "/inquiries/inquiry/add-new",
    name: "inquiries-inquiry-add-new",
    component: () => import("@/pages/inquiries/inquiry/AddNew.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Inquiries",
    },
  },
  {
    path: "/inquiries/create-proposal/:id",
    name: "inquiries-create-proposal",
    component: () => import("@/pages/inquiries/inquiry/CreateProposal.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Inquiries",
    },
  },
  {
    path: "/inquiries/details/:slug",
    name: "inquiries-detail",
    component: () => import("@/pages/inquiries/Details.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Inquiry Detail",
    },
  },
  {
    path: "/inquiries/inquiry/proposal",
    name: "inquiries-proposal",
    component: () => import("@/pages/inquiries/inquiry/proposal.vue"),
    meta: {
      auth: true,
      layout: "default",
      title: "Inquiry Detail",
    },
  },
];
export default routes;
