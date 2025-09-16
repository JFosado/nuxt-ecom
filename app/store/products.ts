import { defineStore } from 'pinia';
import { useApi } from '~/composables/useApi';

export const useProductsStore = defineStore('products', () => {
  const { apiFetch } = useApi();
  const products = ref([]);
  const categories = ref([]);
  const loading = ref(false);

  // Paginación
  const offset = ref(0);
  const limit = ref(12);

  async function fetchProducts(filters: {
    title?: string;
    categoryId?: string;
    minPrice?: number;
    maxPrice?: number;
    offset?: number;
    limit?: number;
  } = {}) {
    loading.value = true;
    try {
      const query = new URLSearchParams();

      // filtros
      if (filters.title) query.append('title', filters.title);
      if (filters.categoryId) query.append('categoryId', filters.categoryId);
      if (filters.minPrice !== undefined) query.append('price_min', String(filters.minPrice));
      if (filters.maxPrice !== undefined) query.append('price_max', String(filters.maxPrice));

      // paginación
      query.append('offset', String(filters.offset ?? offset.value));
      query.append('limit', String(filters.limit ?? limit.value));

      products.value = await apiFetch(`/products?${query.toString()}`);

      // actualizar offset
      offset.value = filters.offset ?? offset.value;
      limit.value = filters.limit ?? limit.value;
    } finally {
      loading.value = false;
    }
  }

  async function fetchCategories() {
    categories.value = await apiFetch('/categories');
  }

  async function nextPage() {
    offset.value += limit.value;
    await fetchProducts({ offset: offset.value, limit: limit.value });
  }

  async function prevPage() {
    if (offset.value >= limit.value) {
      offset.value -= limit.value;
      await fetchProducts({ offset: offset.value, limit: limit.value });
    }
  }

  return { products, categories, loading, offset, limit, fetchProducts, fetchCategories, nextPage, prevPage };
});
