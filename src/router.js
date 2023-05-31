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
            meta: {title: 'Home'},
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
            meta: {title: 'About'},
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList,
            meta: {title: 'Projects'},
        },
        {
            path: '/contact',
            name: 'contact',
            component: AppContact,
            meta: {title: 'Contact'},
        },
        {
            path: '/singleProject/:slug',
            name:'singleProject',
            component: SingleProject,
            meta: {title: 'SingleProject'},
        },

    ],

});


router.beforeEach((to, from) => {

    document.title = to.meta?.title ?? 'Portfolio'

});

export { router };