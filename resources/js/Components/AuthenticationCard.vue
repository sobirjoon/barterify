<template>
    <main class="flex-1 container mx-auto px-4 py-8">
        <div class="flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div class="card bg-base-100 w-full sm:max-w-md shadow-xl overflow-hidden sm:rounded-lg">
                <figure class="h-56">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Illustration of account login"
                        class="w-full object-cover"
                    />
                </figure>
                <div class="card-body space-y-2">
                    <h2 class="card-title text-lg font-semibold">{{ $page.component === 'Auth/Register' ? 'Create a new account' : 'Login to your account' }}</h2>
                    <slot/>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
</script>
