import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import AppContact from './pages/AppContact.vue';

const router = createRouter({

    history: createWebHistory(),

    routes: [

        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList,
        },
        {
            path: '/contact',
            name: 'contact',
            component: AppContact,
        },
        {
            path: '/singleProject/:slug',
            name:'singleProject',
            component: SingleProject,
        },

    ],

});

export { router };