import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  interface CartItem {
    id: string | number;
    qty: number;
    price: number;
  }

  const items = ref<CartItem[]>([]);

  function add(product: { id: any; price: number }) {
    const found = items.value.find(i => i.id === product.id);
    if (found) found.qty += 1;
    else items.value.push({
      ...product,
      qty: 1,
      price: product.price 
    });
  }

  function remove(id: string | number) {
    items.value = items.value.filter(i => i.id !== id);
  }

  function clear() {
    items.value = [];
  }

  const count = computed(() => items.value.reduce((a, i) => a + i.qty, 0));
  const total = computed(() => items.value.reduce((a, i) => a + i.price * i.qty, 0));

  return { items, add, remove, clear, count, total };
});