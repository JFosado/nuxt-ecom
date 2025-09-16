import { defineStore } from 'pinia';
import { useApi } from '~/composables/useApi';

export const useProductsStore = defineStore('products', () => {
  const { apiFetch } = useApi();
  const products = ref([]);
  const categories = ref([]);
  const loading = ref(false);

  async function fetchProducts(filters: { title?: string; categoryId?: string; minPrice?: number; maxPrice?: number } = {}) {
    loading.value = true;
    try {
      let query = new URLSearchParams();
      if (filters.title) query.append('title', filters.title);
      if (filters.categoryId) query.append('categoryId', filters.categoryId);
      if (filters.minPrice) query.append('price_min', String(filters.minPrice));
      if (filters.maxPrice) query.append('price_max', String(filters.maxPrice));
      products.value = await apiFetch(`/products?${query.toString()}`);
    } finally {
      loading.value = false;
    }
  }

  async function fetchCategories() {
    categories.value = await apiFetch('/categories');
  }

  return { products, categories, loading, fetchProducts, fetchCategories };
});