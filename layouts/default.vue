<script setup>
import { inject } from 'vue';
import Provider from "../providers/index.vue"
import MainSearch from '~~/components/MainSearch.vue';

const isSearchOpen = inject("isSearchOpen")
</script>
<template>
  <div>
    <Html class="h-full bg-gray-100">

    <Body>
      <div class="flex flex-col h-screen">
        <Provider>

          <MainSearch />
          <Header />

          <main class="flex-grow">
            <slot />
          </main>
          <TheFooter></TheFooter>
        </Provider>
      </div>
    </Body>

    </Html>
  </div>
</template>
