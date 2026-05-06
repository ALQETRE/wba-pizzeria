<script setup>
import ContactsSection from '@/components/ContactsSection.vue'
import { useCart } from '../cart.js'
import PizzaCard from '@/components/PizzaCard.vue'
import TopNavbar from '@/components/TopNavbar.vue'
const { cartArray, addPizzaToCart, clearCart, totalPrice, showToast } = useCart()
</script>

<template>
  <TopNavbar :cart="true" />
  <!-- Hero Section -->
  <section class="flex flex-col items-center bg-primary-2 p-16 space-y-2">
    <h2 class="text-center">Shopping Cart</h2>
  </section>

  <!-- Pizza -->
  <section class="bg-secondary-2 shadow-large-inset" id="Pizza">
    <div class="mx-auto max-w-5xl 2xl:max-w-360 p-8 flex flex-col items-center">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center w-full gap-8 pb-8">
        <PizzaCard
          class=""
          v-for="pizza in cartArray"
          :key="pizza.id"
          :pizza="pizza"
          :cart="true"
        />
      </div>
      <div class="w-2xs flex flex-col justify-center bg-primary-1 p-8 rounded-4xl shadow-medium">
        <p class="text-center">Total: {{ totalPrice }} czk</p>
        <button
          @click="clearCart"
          class="text-center self-center text-white bg-secondary-0 w-full p-2 rounded-full text-4xl font-heading shadow-medium hover:shadow-largeshadow-medium hover:shadow-large hover:scale-105 transition-all"
        >
          Clear Cart
        </button>
      </div>
    </div>
  </section>

  <!-- Contacts -->
  <ContactsSection />
</template>
