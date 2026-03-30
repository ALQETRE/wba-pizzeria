<script setup>
const navBar = [
  { id: 0, text: 'Pizza', link: '#Classic' },
  { id: 1, text: 'Hello', link: '' },
  { id: 2, text: 'Contacts', link: '' },
]
</script>

<template>
  <nav
    class="w-full h-16 bg-primary-1 flex flex-row justify-items-center items-center px-16 space-x-16"
  >
    <a v-for="element in navBar" :key="element.id" :href="element.link">{{ element.text }}</a>
  </nav>
</template>
