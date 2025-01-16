<script setup>
import {Head, Link} from "@inertiajs/vue3";
import {computed, ref} from "vue";
import ThemeController from "@/Pages/Home/ThemeController.vue";
import Footer from "@/Pages/Home/Footer.vue";
import NavLink from "@/Components/NavLink.vue";
import { usePage } from "@inertiajs/vue3";

defineProps({
    title: String,
    active: Boolean,
});

</script>

<template>

    <Head :title="title" />

    <div class="min-h-screen flex flex-col">
        <header>
            <div class="navbar bg-base-100 shadow-sm px-8">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost text-2xl">Barterify</a>
                    <ThemeController class="ml-2" />
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal text-sm sm:text-base px-1 font-medium space-x-2">
                        <li>
                            <Link href="/" :class="{ 'active': $page.component === 'Home' }">Home</Link>
                        </li>
                        <li>
                            <Link href="/marketplace" :class="{ 'active': $page.component === 'Marketplace' }">Marketplace</Link>
                        </li>
                        <li>
                            <Link href="/help" :class="{ 'active': $page.component === 'Help' }">Help</Link>
                        </li>
                        <li>
                            <Link href="/about" :class="{ 'active': $page.component === 'About' }">About</Link>
                        </li>
                        <li>
                            <Link href="/contact" :class="{ 'active': $page.component === 'Contact' }">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div v-if="$page.props.canLogin" class="navbar-end space-x-2">
                    <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="btn btn-accent">
                    Dashboard
                    </Link>

                    <template v-else>
                        <Link :href="route('login')" class="btn btn-outline">
                        Log in
                        </Link>

                        <Link v-if="$page.props.canRegister" :href="route('register')" class="btn btn-primary">
                        Register
                        </Link>
                    </template>
                </div>
            </div>
        </header>

        <!-- Page Content -->
        <main class="flex-1 container mx-auto px-4 py-8">
            <slot />
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<style scoped></style>
