<script setup>
const navBarHome = [
  { id: 0, text: 'Pizza', link: '#Classic' },
  { id: 1, text: 'Classic', link: '#Classic' },
  { id: 2, text: 'Authentic', link: '#Authentic' },
  { id: 3, text: 'Contacts', link: '#Contacts' },
]

const navBarCart = [
  { id: 0, text: 'Pizza', link: '/' },
  { id: 1, text: 'Contacts', link: '#Contacts' },
]

defineProps(['cart'])
</script>

<template>
  <nav
    class="w-full py-1 sm:py-2 px-4 space-x-4 md:py-4 md:px-16 md:space-x-16 bg-primary-1 flex flex-row justify-items-center items-center relative shadow-medium"
  >
    <a
      class="h5"
      v-for="element in cart ? navBarCart : navBarHome"
      :key="element.id"
      :href="element.link"
      >{{ element.text }}</a
    >
    <div class="ml-auto flex space-x-4">
      <RouterLink :to="cart ? '/' : '/cart'" href="" class=""
        ><img class="size-10 object-contain" src="@/assets/shopping-cart.png" alt="Logo"
      /></RouterLink>
      <img class="size-12 hidden sm:block" src="@/assets/logo-white.svg" alt="Logo" />
    </div>
  </nav>
</template>
