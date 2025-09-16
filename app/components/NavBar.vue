<template>
  <nav class="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
      <!-- Logo -->
      <NuxtLink :to="{ path: '/' }" class="font-bold text-lg" @click="clearSearch">NuxtStore</NuxtLink>

      <div class="ml-auto flex items-center gap-4">
       <!-- Carrito con icono y badge -->
<NuxtLink to="/cart" class="relative flex items-center justify-center p-2 rounded hover:bg-gray-100 w-10 h-10">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"/></svg>

  <span v-if="count > 0" class="absolute -bottom-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
    {{ count }}
  </span>
</NuxtLink>

<!-- Usuario -->
<NuxtLink v-if="!user" to="/login" class="flex items-center justify-center p-2 rounded hover:bg-gray-100 w-10 h-10">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>

</NuxtLink>

        <!-- Usuario logueado -->
        <div v-else class="flex items-center gap-2">
          <img :src="user.avatar" alt="avatar" class="w-7 h-7 rounded-full" />
          <span class="text-sm">{{ user.name }}</span>
          <!-- Logout icon -->
          <button @click="logout" class="p-2 rounded hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M569 337C578.4 327.6 578.4 312.4 569 303.1L425 159C418.1 152.1 407.8 150.1 398.8 153.8C389.8 157.5 384 166.3 384 176L384 256L272 256C245.5 256 224 277.5 224 304L224 336C224 362.5 245.5 384 272 384L384 384L384 464C384 473.7 389.8 482.5 398.8 486.2C407.8 489.9 418.1 487.9 425 481L569 337zM224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L160 96C107 96 64 139 64 192L64 448C64 501 107 544 160 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480C142.3 480 128 465.7 128 448L128 192C128 174.3 142.3 160 160 160L224 160z"/></svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';
import { useCartStore } from '~/store/cart';

const cart = useCartStore();
const count = computed(() => cart.count);

const { user } = storeToRefs(useAuthStore());
const { logout } = useAuthStore();

const q = ref('');

function clearSearch() {
  q.value = '';
  navigateTo({ path: '/' });
}
</script>
