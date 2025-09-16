<template>
  <div class="border rounded flex flex-col overflow-hidden">
    <img :src="product.images?.[0]" alt="" class="h-50 w-full object-cover mb-2" />
    
    <!-- Contenedor glass solo en el fondo -->
    <div class="p-4 flex flex-col flex-1 relative">
      <!-- Capa de fondo glass -->
      <div class="absolute inset-0 bg-white/20 backdrop-blur-md rounded z-0"></div>

      <!-- Contenido del texto encima del glass -->
      <div class="relative z-10 flex flex-col flex-1">
        <h3 class="font-bold mb-1 text-black">{{ product.title }}</h3>
        <p class="text-sm text-gray-600 mb-2">{{ product.category?.name }}</p>
        
        <div class="flex justify-between items-center mt-auto gap-2">
          <span class="font-bold text-lg text-black">${{ product.price }}</span>
          <Button @click="$emit('add-to-cart', product)" class="bg-purple-600 text-white px-3 py-1 rounded">Agregar</Button>
          <NuxtLink :to="`/detail/${product.id}`" class="bg-gray-900 text-purple-100 px-3 py-1 rounded">Ver más</NuxtLink>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
defineProps(['product']);
</script>
