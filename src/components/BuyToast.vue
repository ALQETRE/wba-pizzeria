<script setup>
import { useCart } from '../cart.js'

const { cartArray, addPizzaToCart, clearCart, totalPrice, showToast } = useCart()
</script>

<template>
  <Transition
    enter-from-class="opacity-0 translate-y-2"
    enter-active-class="transition duration-300"
    leave-to-class="opacity-0 translate-y-2"
    leave-active-class="transition duration-300"
  >
    <div
      v-if="showToast"
      class="fixed bottom-4 right-4 bg-primary-2 p-4 rounded-lg shadow-medium z-50"
    >
      <p>Item added to cart</p>
    </div>
  </Transition>
</template>
