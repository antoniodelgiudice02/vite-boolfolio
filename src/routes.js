import { createRouter, createWebHistory } from "vue-router";

import ProjectsList from "./components/layout/main/ProjectsList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "http://127.0.0.1:8000/api/",
      name: "ProjectList",
      component: ProjectsList,
    },
  ],
});

export { router };
