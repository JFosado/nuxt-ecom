<template>
  <section class="max-w-2xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">Carrito</h1>
    <div v-if="cart.items.length === 0">Tu carrito está vacío.</div>
    <div v-else>
      <div v-for="item in cart.items" :key="item.id" class="flex justify-between items-center mb-4">
        <div>
          <div class="font-bold">{{ item.title }}</div>
          <div class="text-sm text-gray-600">Cantidad: {{ item.qty }}</div>
        </div>
        <div>
          <span class="font-bold">${{ item.price * item.qty }}</span>
          <button @click="cart.remove(item.id)" class="ml-2 text-red-600">Quitar</button>
        </div>
      </div>
      <div class="font-bold text-right mt-6">Total: ${{ cart.total }}</div>
      <button @click="cart.clear" class="mt-4 bg-gray-200 px-4 py-2 rounded">Vaciar carrito</button>
    </div>
  </section>
</template>
<script setup>
import { useCartStore } from '~/store/cart';
const cart = useCartStore();
</script>