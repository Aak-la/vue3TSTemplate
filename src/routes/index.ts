import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

let routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home/recommended",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/view/home/home.vue"),
    children: [
      {
        path: "song",
        name: "song",
        component: () => import("@/view/home/song.vue"),
      },
      {
        path: "recommended",
        name: "recommended",
        component: () => import("@/view/home/recommended/recommended.vue"),
      },
      {
        path: "singer",
        name: "singer",
        component: () => import("@/view/home/singer.vue"),
      },
      {
        path: "shelves",
        name: "shelves",
        component: () => import("@/view/home/shelves.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/view/login.vue"),
  },
  {
    path: "/player",
    name: "login",
    component: () => import("@/view/player.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
