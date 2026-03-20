<script setup>
defineProps(['pizza'])
</script>

<template>
  <div
    class="flex flex-col relative rounded-4xl bg-secondary-2 self-center p-2 size-full hover:-translate-y-4 hover:scale-103 transition-all shadow-medium hover:shadow-large"
  >
    <img class="w-full aspect-square object-cover mb-auto" :src="pizza.img" alt="" />

    <div class="mb-auto">
      <h3 class="text-center text-white my-1">{{ pizza.name }}</h3>
      <p class="text-center text-white pb-8 my-2">{{ pizza.price }}czk</p>
    </div>

    <button
      class="text-center self-center text-white bg-secondary-0 w-2/3 p-2 rounded-full absolute -bottom-6 text-5xl font-heading shadow-medium hover:shadow-largeshadow-medium hover:shadow-large hover:scale-105 transition-all"
    >
      Buy
    </button>
  </div>
</template>
