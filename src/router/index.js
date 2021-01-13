import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Home,
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/DashboardContainer.vue"),
      },
      {
        path: "/notes",
        name: "notes",
        component: () => import("../views/Notes.vue"),
      },
      {
        path: "/tasks",
        name: "tasks",
        component: () => import("../views/Tasks.vue"),
        meta: {
          title: "Tasks",
        },
      },
      {
        path: "/playground",
        name: "playground",
        component: () => import("../views/Playground.vue"),
        meta: {
          title: "Playground",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
