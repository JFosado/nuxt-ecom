<template>
  <nav class="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
      <NuxtLink :to="{ path: '/' }" class="font-bold text-lg" @click="clearSearch">NuxtStore</NuxtLink>
      <div class="ml-auto flex items-center gap-3">
        
        <NuxtLink to="/cart" class="relative px-3 py-1.5 border rounded">
          Carrito <span v-if="count" class="ml-1 text-sm">({{ count }})</span>
        </NuxtLink>
        <NuxtLink v-if="!user" to="/login" class="px-3 py-1.5 border rounded">Entrar</NuxtLink>
        <div v-else class="flex items-center gap-2">
          <img :src="user.avatar" alt="avatar" class="w-7 h-7 rounded-full" />
          <span class="text-sm">{{ user.name }}</span>
          <button @click="logout" class="px-2 py-1 border rounded">Salir</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';
import { useCartStore } from '~/store/cart';

const q = ref('');
const cart = useCartStore();
const count = computed(() => cart.count);
const { user } = storeToRefs(useAuthStore());
const { logout } = useAuthStore();

function goSearch() {
  navigateTo({ path: '/', query: { q: q.value || undefined } });
}
function clearSearch() {
  q.value = '';
  navigateTo({ path: '/' });
}
</script>