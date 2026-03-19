<script setup>
defineProps(['pizza'])
</script>

<template>
  <div
    class="flex flex-col relative justify-center rounded-4xl bg-secondary-2 self-center items-center p-2 w-full"
  >
    <img class="size-full object-contain" :src="pizza.img" alt="" />

    <h3 class="text-center text-white mt-2">{{ pizza.name }}</h3>
    <p class="text-center text-white pb-8">{{ pizza.price }}czk</p>
    <button
      class="text-center text-white bg-secondary-0 w-2/3 p-2 rounded-full absolute -bottom-6 text-5xl font-heading"
    >
      Buy
    </button>
  </div>
</template>
