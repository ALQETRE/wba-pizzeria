<script setup>
defineProps(['name'])
</script>

<template>
  <div class="flex w-full my-8 items-center">
    <div class="h-1 flex-1 bg-primary-0 mx-8 rounded-full"></div>
    <h3 class="text-primary-0">{{ name }}</h3>
    <div class="h-1 flex-1 bg-primary-0 mx-8 rounded-full"></div>
  </div>
</template>
