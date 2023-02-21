import { createRouter, createWebHistory } from "vue-router";
import G6View from "../views/G6View.vue";

import VisView from "../views/VisView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "G6View",
      component: G6View,
    },
    {
      path: "/vis",
      name: "VisView",
      component: VisView,
    },
  ],
});

export default router;
