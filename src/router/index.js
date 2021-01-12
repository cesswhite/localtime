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
    path: "/notes",
    name: "notes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Notes.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/DashboardContainer.vue"
          ),
      },
      {
        path: "/task",
        name: "Task",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
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
