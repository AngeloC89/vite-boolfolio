import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import ProjectList from "./pages/ProjectList.vue";
import ProjectComponent from "./pages/ProjectComponent.vue";
import NotFound from "./pages/NotFound.vue";
import ContactComponet from "./pages/ContactComponet.vue";
import AboutMeComponent from "./pages/AboutMeComponent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome, 
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectList, 
    },
    {
      path: "/projects/:slug",
      name: "project-details",
      component: ProjectComponent , 
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound, 
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactComponet,
    },
    {
      path: "/about-me",
      name: "about-me",
      component: AboutMeComponent,
    }
  ],
});

export { router };