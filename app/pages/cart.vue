<template>
  <section class="max-w-2xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">Carrito</h1>
    <div v-if="cart.items.length === 0">Tu carrito está vacío.</div>
    <div v-else>
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="flex justify-between items-center mb-4 border-b pb-2"
      >
       
        <div class="flex items-center space-x-4">
          <img
            :src="item.images?.[0]"
            alt="Producto"
            class="w-16 h-16 object-cover rounded"
          />
          <div>
            <div class="font-bold">{{ item.title }}</div>
            <div class="text-sm text-gray-600">Cantidad: {{ item.qty }}</div>
          </div>
        </div>

        
        <div class="flex items-center space-x-2">
          <span class="font-bold">${{ item.price * item.qty }}</span>
          <button
            @click="cart.remove(item.id)"
            class="text-red-600 hover:underline"
          >
            Quitar
          </button>
        </div>
      </div>

      <div class="font-bold text-right mt-6">Total: ${{ cart.total }}</div>
      <button
        @click="cart.clear"
        class="mt-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        Vaciar carrito
      </button>
    </div>
  </section>
</template>

<script setup>
import { useCartStore } from '~/store/cart';
const cart = useCartStore();
</script>
