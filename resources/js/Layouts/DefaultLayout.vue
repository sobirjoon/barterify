<script setup>
import { Head, Link, router } from "@inertiajs/vue3";
import { computed, ref } from "vue";
import ThemeController from "@/Pages/Home/ThemeController.vue";
import Footer from "@/Pages/Home/Footer.vue";
import NavLink from "@/Components/NavLink.vue";
import { usePage } from "@inertiajs/vue3";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import ApplicationMark from "@/Components/ApplicationMark.vue";

defineProps({
    title: String,
    active: Boolean,
});


const showingNavigationDropdown = ref(false);

const logout = () => {
    router.post(route('logout'));
};
</script>
<template>

    <Head :title="title" />

    <div class="min-h-screen flex flex-col">
        <header>
            <!--            <div class="navbar bg-neutral text-neutral-content">-->
            <div class="navbar bg-base-100 shadow-lg px-8">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost btn-circle lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link href="/" :class="{ 'active': $page.component === 'Home' }">Home</Link>
                            </li>
                            <li>
                                <Link href="/marketplace" :class="{ 'active': $page.component === 'Marketplace' }">
                                Marketplace
                                </Link>
                            </li>
                            <li>
                                <Link href="/help" :class="{ 'active': $page.component === 'Help' }">Help</Link>
                            </li>
                            <li>
                                <Link href="/about" :class="{ 'active': $page.component === 'About' }">About</Link>
                            </li>
                            <li>
                                <Link href="/contact" :class="{ 'active': $page.component === 'Contact' }">Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div class="flex items-center">
                        <ApplicationMark class="hidden lg:block h-9 w-auto" />
                        <a class="btn btn-ghost text-2xl">Barterify</a>
                    </div>
                    <ThemeController class="ml-2" />
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal text-sm sm:text-base px-1 font-medium space-x-2">
                        <li>
                            <Link href="/" :class="{ 'active': $page.component === 'Home' }">Home</Link>
                        </li>
                        <li>
                            <Link href="/marketplace" :class="{ 'active': $page.component === 'Marketplace' }">
                            Marketplace
                            </Link>
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
                <div class="navbar-end space-x-2">
                    <div v-if="$page.props.canLogin">
                        <div class="flex flex-row gap-4" v-if="$page.props.auth.user">
                            <div class="hidden sm:flex sm:items-center sm:ms-6">
                                <!-- Settings Dropdown -->
                                <div class="ms-3 relative">
                                    <Dropdown align="right" width="48">
                                        <template #trigger>
                                            <button v-if="$page.props.jetstream.managesProfilePhotos"
                                                class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                                <img class="size-12 rounded-full object-cover"
                                                    :src="$page.props.auth.user.profile_photo_url"
                                                    :alt="$page.props.auth.user.name">
                                            </button>

                                            <span v-else class="inline-flex rounded-md">
                                                <button type="button"
                                                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150">
                                                    {{ $page.props.auth.user.name }}

                                                    <svg class="ms-2 -me-0.5 size-4" xmlns="http://www.w3.org/2000/svg"
                                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </button>
                                            </span>
                                        </template>

                                        <template #content>
                                            <!-- Account Management -->
                                            <div class="block px-4 py-2 text-xs text-gray-400">
                                                Manage Account
                                            </div>

                                            <DropdownLink :href="route('profile.show')">
                                                Profile
                                            </DropdownLink>

                                            <DropdownLink v-if="$page.props.jetstream.hasApiFeatures"
                                                :href="route('api-tokens.index')">
                                                API Tokens
                                            </DropdownLink>

                                            <div class="border-t border-gray-200 dark:border-gray-600" />

                                            <!-- Authentication -->
                                            <form @submit.prevent="logout">
                                                <DropdownLink as="button">
                                                    Log Out
                                                </DropdownLink>
                                            </form>
                                        </template>
                                    </Dropdown>
                                </div>
                            </div>
                            <Link :href="route('dashboard')" class="btn btn-accent">
                            Dashboard
                            </Link>
                        </div>
                        <template v-else>
                            <div class="space-x-2">
                                <Link :href="route('login')" class="btn btn-outline">
                                Log in
                                </Link>

                                <Link v-if="$page.props.canRegister" :href="route('register')" class="btn btn-primary">
                                Register
                                </Link>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </header>

        <!-- Page Content -->
        <main>
            <slot />
        </main>

        <!-- Footer -->
        <Footer class="mt-auto" />
    </div>
</template>

<style scoped></style>
