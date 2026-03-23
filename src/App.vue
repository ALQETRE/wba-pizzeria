<script setup>
import PizzaCategory from './components/PizzaCategory.vue'
import { pizzaData } from './data'
</script>

<template>
  <!-- Hero Section -->
  <section class="flex flex-col items-center bg-primary-2 p-16 space-y-2">
    <h1 class="text-center">Pizza Linguine</h1>
    <h2 class="text-center">The best pizza at Andel</h2>
  </section>

  <section class="bg-secondary-2 shadow-large-inset">
    <div
      v-for="pizzaCat in pizzaData"
      :key="pizzaCat.id"
      class="flex flex-col space-y-4 mx-auto max-w-5xl 2xl:max-w-360 p-8"
    >
      <PizzaCategory :pizzaCat="pizzaCat" />
    </div>
  </section>

  <!-- Contacts -->
  <section class="flex justify-between p-4 bg-primary-2">
    <div class="flex flex-col">
      <h5 class="font-bold">Contacts:</h5>
      <p>pizza@pizzalinguine.com</p>
    </div>

    <div>
      <img class="size-12" src="@/assets/logo-white.svg" alt="Logo" />
    </div>
  </section>
</template>
