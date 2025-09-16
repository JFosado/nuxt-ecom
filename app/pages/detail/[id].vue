<template>
  <section class="max-w-3xl mx-auto px-4 py-8" v-if="product">
    <div class="flex flex-col md:flex-row gap-8">
      <img :src="product.images?.[0]" alt="" class="w-full md:w-80 h-80 object-cover rounded" />
      <div>
        <h1 class="text-3xl font-bold mb-2">{{ product.title }}</h1>
        <p class="text-gray-600 mb-2">{{ product.category?.name }}</p>
        <p class="mb-4">{{ product.description }}</p>
        <div class="text-2xl font-bold mb-4">${{ product.price }}</div>
        <button @click="addToCart(product)" class="bg-purple-600 text-white px-4 py-2 rounded">Agregar al carrito</button>
      </div>
    </div>
    <div v-if="(product.images ?? []).length > 1" class="mt-8">
      <h2 class="font-bold mb-2">Más imágenes</h2>
      <div class="flex gap-2">
        <img v-for="(img, i) in (product.images ?? []).slice(1)" :key="i" :src="img" class="w-24 h-24 object-cover rounded" />
      </div>
    </div>
  </section>
  <div v-else class="text-center py-20">Cargando producto...</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCartStore } from '~/store/cart';
import { useApi } from '~/composables/useApi';

const route = useRoute();
const cart = useCartStore();
const { apiFetch } = useApi();

interface Product {
  images?: string[];
  title: string;
  category?: { name: string };
  description: string;
  price: number;
}

const product = ref<Product | null>(null);

async function fetchProduct() {
  const id = route.params.id;
  product.value = await apiFetch(`/products/${id}`);
}

function addToCart(prod: any) {
  cart.add(prod);
}

onMounted(fetchProduct);
</script>