<script setup>
import ContactsSection from '@/components/ContactsSection.vue'
import PizzaCategory from '../components/PizzaCategory.vue'
import TopNavbar from '../components/TopNavbar.vue'
import { pizzaData } from '../data'
import BuyToast from '@/components/BuyToast.vue'
</script>

<template>
  <BuyToast />

  <TopNavbar />
  <!-- Hero Section -->
  <section class="flex flex-col items-center bg-primary-2 p-16 space-y-2">
    <h1 class="text-center">Pizza Linguine</h1>
    <h2 class="text-center">The best pizza at Andel</h2>
  </section>

  <!-- Pizza -->
  <section class="bg-secondary-2 shadow-large-inset">
    <div
      v-for="pizzaCat in pizzaData"
      :key="pizzaCat.id"
      class="flex flex-col space-y-4 mx-auto max-w-5xl 2xl:max-w-360 p-8"
      :id="pizzaCat.name"
    >
      <PizzaCategory :pizzaCat="pizzaCat" />
    </div>
  </section>

  <!-- Contacts -->
  <ContactsSection />
</template>
