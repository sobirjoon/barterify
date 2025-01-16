<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
});
const classes = computed(() => {
    return props.active
        ? 'bg-primary text-primary-content font-semibold transition-colors duration-200'
        : 'hover:bg-base-200 hover:text-base-content transition-colors duration-200';
});
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
