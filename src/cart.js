import { ref } from 'vue'

const cartArray = ref(JSON.parse(localStorage.getItem('cart') ?? '[]'))

const totalPrice = ref(0)
for (const pizza of cartArray.value) {
  totalPrice.value += pizza.price
}

const showToast = ref(false)
let toastTime = null

export function useCart() {
  function addPizzaToCart(pizza) {
    cartArray.value.push(pizza)
    localStorage.setItem('cart', JSON.stringify(cartArray.value))
    totalPrice.value += pizza.price

    clearTimeout(toastTime)
    showToast.value = true
    toastTime = setTimeout(() => (showToast.value = false), 1000)
  }

  function clearCart() {
    cartArray.value = []
    totalPrice.value = 0
    localStorage.setItem('cart', JSON.stringify(cartArray.value))
  }

  return { cartArray, addPizzaToCart, clearCart, totalPrice, showToast }
}
