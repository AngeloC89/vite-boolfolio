import { createRouter, createWebHistory } from "vue-router";

// Importa le pagine
import AppHome from "./pages/AppHome.vue";
import ProjectDetails from "./pages/ProjectDetails.vue";
import NotFound from "./pages/NotFound.vue";
import IconProject from "./pages/iconProject.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects/:slug",
      name: "project-details",
      component: ProjectDetails,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
    {
      path: "/iconProject/:id/:name",
      name: "iconProject",
      component: IconProject,
    },
  ],
});

export { router };
