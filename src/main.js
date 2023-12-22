import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./pages/index.vue"),
    },
    {
      path: "/hommes",
      component: () => import("./pages/mens.vue"),
    },
    {
      path: "/femmes",
      component: () => import("./pages/womens.vue"),
    },
    {
      path: "/enfants",
      component: () => import("./pages/kids.vue"),
    },
    {
      path: "/chaussures",
      component: () => import("./pages/shoes.vue"),
    },
    {
      path: "/sources",
      component: () => import("./pages/sources.vue"),
    },
    {
      path: "/tshirt",
      component: () => import("./pages/tshirt.vue"),
    },
    {
      path: "/hijab",
      component: () => import("./pages/hijab.vue"),
    },
  ],
});

createApp(App).use(router).mount("#app");
