import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LogInView from '../views/LogInView.vue';
import RegisterView from '../views/RegisterView.vue';
import HomeView from '../views/HomeView.vue';
import LandingPage from '../views/LandingPage.vue';
import DonationForm from '../views/DonationForm.vue';
import TripForm from '../views/TripForm.vue';
import TripsPage from '../views/TripsPage.vue';
import TripDetailsPage from '../views/TripDetailsPage.vue';
import CreateTripPage from '../views/CreateTripPage.vue';
import PublicTripsPage from '../views/PublicTripsPage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'landing',
        component: LandingPage,
    },
    {
        path: '/viagens',
        name: 'trips',
        component: TripsPage,
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
        path: '/viagens/oferecer',
        name: 'publicTrips',
        component: PublicTripsPage,
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'donation',
                name: 'donation',
                component: DonationForm,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'trips',
                name: 'trips',
                component: TripForm,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/viagens/:id',
                name: 'tripDetails',
                component: TripDetailsPage,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: '/viagens/oferecer',
                name: 'createTrip',
                component: CreateTripPage,
                meta: {
                    requiresAuth: true
                }
            },
        ],
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
