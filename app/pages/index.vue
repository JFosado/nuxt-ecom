<template>
  <Hero />
  <section class="max-w-6xl mx-auto px-4 py-6">
    <h1 class="text-2xl font-bold mb-4">Productos</h1>
    <form @submit.prevent="apply" class="grid md:grid-cols-4 gap-3 mb-6">
      <input v-model="q" placeholder="Buscar por nombre" class="px-3 py-2 border rounded" />
      <select v-model.number="categoryId" class="px-3 py-2 border rounded">
        <option :value="undefined">Todas las categorías</option>
        <option v-for="c in categories" :key="c.id" :value="c.id">{{ c.name }}</option>
      </select>
      <input type="number" v-model.number="minPrice" placeholder="Precio mínimo" class="px-3 py-2 border rounded" />
      <input type="number" v-model.number="maxPrice" placeholder="Precio máximo" class="px-3 py-2 border rounded" />
      <button type="submit" class="md:col-span-4 px-3 py-2 border rounded">Aplicar filtros</button>
    </form>
    <div v-if="loading" class="py-10 text-center">Cargando…</div>
    <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ProductCard v-for="p in products" :key="p.id" :product="p" @add-to-cart="cart.add(p)" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProductsStore } from '~/store/products';
import { useCartStore } from '~/store/cart';
import Hero from '~/components/Hero.vue';

const route = useRoute();
const store = useProductsStore();
const cart = useCartStore();
const { products, categories, loading } = storeToRefs(store) as {
  products: Ref<{ id: number; name: string; price: number }[]>;
  categories: Ref<{ id: number; name: string }[]>;
  loading: Ref<boolean>;
};

const q = ref((route.query.q as string) || '');
const categoryId = ref<number | undefined>(undefined);
const minPrice = ref<number | undefined>(undefined);
const maxPrice = ref<number | undefined>(undefined);

onMounted(async () => {
  await store.fetchCategories();
  await store.fetchProducts({});
});

async function apply() {
  await store.fetchProducts({
    title: q.value,
    categoryId: categoryId.value?.toString(),
    minPrice: minPrice.value,
    maxPrice: maxPrice.value,
  });
}
</script>