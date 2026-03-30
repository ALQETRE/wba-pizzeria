<script setup>
const navBar = [
  { id: 0, text: 'Pizza', link: '#Classic' },
  { id: 1, text: 'Classic', link: '#Classic' },
  { id: 2, text: 'Authentic', link: '#Authentic' },
  { id: 3, text: 'Contacts', link: '#Contacts' },
]
</script>

<template>
  <nav
    class="w-full py-1 sm:py-2 px-8 space-x-8 md:py-4 md:px-16 md:space-x-16 bg-primary-1 flex flex-row justify-items-center items-center relative shadow-medium"
  >
    <a class="h5" v-for="element in navBar" :key="element.id" :href="element.link">{{
      element.text
    }}</a>
    <div class="ml-auto">
      <img class="size-12" src="@/assets/logo-white.svg" alt="Logo" />
    </div>
  </nav>
</template>
