<script setup>
import PizzaCard from './components/PizzaCard.vue'
import { pizzaData } from './data'
</script>

<template>
  <!-- Hero Section -->
  <section class="flex flex-col items-center bg-primary-2 p-16">
    <h1 class="text-center">Pizza Linguine</h1>
    <h2 class="text-center">The best pizza at Andel</h2>
  </section>

  <section>
    <div
      class="mx-auto bg-primary-0 grid grid-cols-4 justify-center max-w-360 gap-x-8 gap-y-16 p-8 pb-16"
    >
      <PizzaCard class="" v-for="pizza in pizzaData" :key="pizza.id" :pizza="pizza" />
    </div>
  </section>

  <!-- Contacts -->
  <section class="flex justify-between p-4 bg-primary-2">
    <div class="flex flex-col">
      <h5 class="font-bold">Contacts:</h5>
      <p>pizza@pizzalinguine.com</p>
    </div>

    <div>
      <img class="size-12" src="@/assets/logo.svg" alt="Logo" />
    </div>
  </section>
</template>
