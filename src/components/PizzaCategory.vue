<script setup>
import PizzaCard from './PizzaCard.vue'
import PizzaCategorySeparator from './PizzaCategorySeparator.vue'

defineProps(['pizzaCat'])
</script>

<template>
  <PizzaCategorySeparator :name="pizzaCat.name" />
  <div
    class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center w-full gap-x-8 gap-y-16 pb-8"
  >
    <PizzaCard class="" v-for="pizza in pizzaCat.pizzas" :key="pizza.id" :pizza="pizza" />
  </div>
</template>
