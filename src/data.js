import margharitaImg from './assets/pizzas/margharita.png'
import hawaiianImg from './assets/pizzas/hawaiian.png'
import pepperoniImg from './assets/pizzas/pepperoni.png'
import veggieImg from './assets/pizzas/veggie.png'
import quatroFormaggiImg from './assets/pizzas/quatro_formaggi.png'

export const pizzaData = [
  {
    id: 0,
    name: 'Classic',
    pizzas: [
      { id: 0, name: 'Margharita', price: 120, img: margharitaImg },
      { id: 1, name: 'Hawaiian', price: 140, img: hawaiianImg },
      { id: 2, name: 'Pepperoni', price: 130, img: pepperoniImg },
      { id: 3, name: 'Veggie', price: 120, img: veggieImg },
      { id: 30, name: 'Veggie1', price: 125, img: veggieImg },
      {
        id: 31,
        name: 'Veggie2',
        price: 100,
        img: veggieImg,
        isSpecial: true,
      },
      {
        id: 4,
        name: 'Quattro Formaggi',
        price: 130,
        img: quatroFormaggiImg,
      },
    ],
  },
  {
    id: 1,
    name: 'Authentic',
    pizzas: [
      { id: 0, name: 'Margharita', price: 120, img: margharitaImg },
      { id: 1, name: 'Pepperoni', price: 130, img: pepperoniImg },
      {
        id: 2,
        name: 'Quattro Formaggi',
        price: 130,
        img: quatroFormaggiImg,
      },
    ],
  },
]
