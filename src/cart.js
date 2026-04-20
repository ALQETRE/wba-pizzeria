import { ref } from 'vue'

const cartArray = ref(JSON.parse(localStorage.getItem('cart') ?? '[]'))

const totalPrice = ref(0)
for (const pizza of cartArray.value) {
  totalPrice.value += pizza.price
}

export function useCart() {
  function addPizzaToCart(pizza) {
    cartArray.value.push(pizza)
    localStorage.setItem('cart', JSON.stringify(cartArray.value))
    totalPrice.value += pizza.price
  }

  function clearCart() {
    cartArray.value = []
    totalPrice.value = 0
    localStorage.setItem('cart', JSON.stringify(cartArray.value))
  }

  return { cartArray, addPizzaToCart, clearCart, totalPrice }
}
