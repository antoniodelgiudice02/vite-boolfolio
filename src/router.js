import { createRouter, createWebHistory } from "vue-router";

import ProjectsPage from "./components/layout/main/pages/ProjectsPage.vue";
import HomePage from "./components/layout/main/pages/HomePage.vue"
import DetailPage from "./components/layout/main/pages/DetailPage.vue"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,

    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsPage,
    },
    {
      path: "/projects/:id",
      name: "detail",
      component: DetailPage,
    },
  ],
});

export { router };
