import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import AppLayout from "@/Layouts/AppLayout.vue";
import DefaultLayout from "@/Layouts/DefaultLayout.vue";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    // resolve: name => {
    //     const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    //     let page = pages[`./Pages/${name}.vue`]
    //     page.default.layout = name.startsWith('Public/') ? undefined : AppLayout
    //     return page
    // },
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.vue', {eager: true});
        let page = pages[`./Pages/${name}.vue`];

        // Apply layout only if the page is not part of the dashboard
        if (!name.startsWith('Dashboard')) {
            page.default.layout = DefaultLayout; // Default to DefaultLayout for non-dashboard pages
        } else {
            page.default.layout = AppLayout;
        }

        return page;
    },
    // resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
