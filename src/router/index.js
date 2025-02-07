import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/NotFound.vue";
import TheAbout from "../views/TheAbout.vue";
import TheHome from "../views/TheHome.vue";
import TheProjects from "../views/TheProjects.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: TheHome,
    meta: {
      title: "Tahrioui Hassan | Laravel Full Stack Developer"
    }
  },
  {
    path: "/home",
    name: "home",
    redirect: "/",
  },
  {
    path: "/about",
    name: "about",
    component: TheAbout,
    meta: {
      title: "About - Tahrioui Hassan | Laravel Developer"
    }
  },
  {
    path: "/projects",
    name: "projects",
    component: TheProjects,
    meta: {
      title: "Projects - Tahrioui Hassan | Laravel Developer"
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "404 Not Found"
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0, behavior: "smooth" };
  },
});

// Navigation guards
router.beforeEach((to, from, next) => {
  // Update page title
  document.title = to.meta.title || "Tahrioui Hassan | Laravel Full Stack Developer";
  
  // Handle navigation
  if (to.matched.length === 0) {
    next({ name: 'NotFound' });
    return;
  }
  next();
});

// Handle navigation errors
router.onError((error) => {
  console.error('Navigation error:', error);
  router.push({ name: 'NotFound' });
});

export default router;
