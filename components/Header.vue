<template>
    <header class="bg-indigo-600">
        <nav class="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
            <div class="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
                <div class="flex items-center">
                    <NuxtLink to="/">
                        <span class="sr-only">Your Company</span>
                        <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
                    </NuxtLink>
                    <div class="ml-10 hidden space-x-8 lg:block">
                        <NuxtLink v-for="link in navigation" :key="link.name" :to="link.href"
                            class="text-base font-medium text-white hover:text-indigo-50">{{ link.name }}</NuxtLink>
                    </div>
                </div>
                <div class="ml-10 space-x-4">
                    <a href="#"
                        class="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">Sign
                        in</a>
                    <a href="#"
                        class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50">Sign
                        up</a>
                </div>
            </div>
            <div class="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
                <NuxtLink v-for="link in navigation" :key="link.name" :to="link.href"
                    class="text-base font-medium text-white hover:text-indigo-50">{{ link.name }}</NuxtLink>
            </div>
        </nav>
    </header>
</template>

<script setup>
const navigation = [
    { name: 'Patients', href: '/patients' },
    { name: 'Appointments', href: '/appointments' },
    { name: 'Visits', href: '/visits' },
    { name: 'Users', href: '/users' },
]
</script>