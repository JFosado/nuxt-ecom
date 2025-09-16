<template>
  <div class="border rounded p-4 flex flex-col">
    <img :src="product.images?.[0]" alt="" class="h-40 w-full object-cover rounded mb-2" />
    <h3 class="font-bold mb-1">{{ product.title }}</h3>
    <p class="text-sm text-gray-600 mb-2">{{ product.category?.name }}</p>
    <div class="flex justify-between items-center mt-auto gap-2">
      <span class="font-bold text-lg">${{ product.price }}</span>
      <button @click="$emit('add-to-cart', product)" class="bg-purple-600 text-white px-3 py-1 rounded">Agregar</button>
      <NuxtLink :to="`/detail/${product.id}`" class="bg-blue-600 text-white px-3 py-1 rounded">Ver más</NuxtLink>
    </div>
  </div>
</template>
<script setup>
defineProps(['product']);
</script>