<template>
  <div class="border rounded flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl h-full">
    <!-- Contenido principal (imagen + texto) -->
    <NuxtLink :to="`/detail/${product.id}`" class="block flex-1">
      <img :src="product.images?.[0]" alt="" class="h-50 w-full object-cover mb-2" />
      
      <div class="p-4 flex flex-col relative rounded-lg overflow-hidden">
        <div class="absolute inset-0 bg-white/20 backdrop-blur-md rounded z-0"></div>

        <div class="relative z-10 flex flex-col">
          <h3 class="font-bold mb-1 text-black">{{ product.title }}</h3>
          <p class="text-sm text-gray-600 mb-2">{{ product.category?.name }}</p>
        </div>
      </div>
    </NuxtLink>

    <!-- Footer con precio y botón -->
    <div class="p-4 flex justify-between items-center">
      <span class="font-bold text-lg text-black">${{ product.price }}</span>
      <Button @click="$emit('add-to-cart', product)" class="bg-transparent border border-black text-black px-3 py-1 rounded">
        Agregar
      </Button>
    </div>
  </div>
</template>

<script setup>
defineProps(['product']);
</script>
