<script setup>
import { provide, readonly } from 'vue';

const isSearchOpen = ref(false)
const toggleSearch = () => isSearchOpen.value = !isSearchOpen.value

provide("isSearchOpen", readonly(isSearchOpen))
provide("toggleSearch", toggleSearch)
</script>
<template>
    <slot />
</template>