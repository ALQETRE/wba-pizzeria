<script setup>
import { useCart } from '../cart.js'
const { cartArray, addPizzaToCart, clearCart, totalPrice, showToast } = useCart()

defineProps(['pizza', 'cart'])
</script>

<template>
  <div
    class="flex flex-col relative rounded-4xl bg-primary-1 self-center p-2 size-full hover:-translate-y-4 hover:scale-103 transition-all shadow-medium hover:shadow-large"
  >
    <img class="w-full aspect-square object-cover mb-auto" :src="pizza.img" :alt="pizza.name" />

    <div class="mb-auto">
      <h4 class="text-center text-black my-1">
        {{ pizza.name }}
      </h4>
      <p class="text-center text-black pb-8 my-2">{{ pizza.price }}czk</p>
    </div>

    <button
      v-if="!cart"
      class="text-center self-center text-white bg-secondary-0 w-2/3 p-2 rounded-full absolute -bottom-6 text-4xl font-heading shadow-medium hover:shadow-largeshadow-medium hover:shadow-large hover:scale-105 transition-all"
      @click="addPizzaToCart(pizza)"
    >
      Buy
    </button>
  </div>
</template>
