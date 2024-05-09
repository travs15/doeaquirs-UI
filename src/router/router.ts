import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LogInView from '../views/LogInView.vue';
import RegisterView from '../views/RegisterView.vue';
import HomeView from '../views/HomeView.vue';
import LandingPage from '../views/LandingPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'betme',
    component: LandingPage,
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  /**
   * Undefined routes get redirected to a 404.
   */
  // {
  //   path: '/:catchAll(.*)',
  //   component: PageNotFound,
  //   name: 'NotFound'
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
