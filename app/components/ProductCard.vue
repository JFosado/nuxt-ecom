<template>
  <NuxtLink :to="`/detail/${product.id}`" class="block border rounded flex flex-col overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
    <img :src="product.images?.[0]" alt="" class="h-50 w-full object-cover mb-2" />
    
    <div class="p-4 flex flex-col flex-1 relative rounded-lg overflow-hidden">
      <div class="absolute inset-0 bg-white/20 backdrop-blur-md rounded z-0"></div>

      <div class="relative z-10 flex flex-col flex-1">
        <h3 class="font-bold mb-1 text-black">{{ product.title }}</h3>
        <p class="text-sm text-gray-600 mb-2">{{ product.category?.name }}</p>
        
        <div class="flex justify-between items-center mt-auto">
          <span class="font-bold text-lg text-black">${{ product.price }}</span>
          <Button @click.stop="$emit('add-to-cart', product)" class="bg-transparent text-black border border-black px-3 py-1 rounded">Añadir</Button>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps(['product']);
</script>
