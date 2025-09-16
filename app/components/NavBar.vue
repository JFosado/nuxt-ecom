<template>
  <nav class="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
      <!-- Logo -->
      <NuxtLink :to="{ path: '/' }" class="font-bold text-lg flex gap-2 text-black" @click="clearSearch">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-6 h-6 text-black">
          <path fill="currentColor" d="M94.7 136.3C101.6 112.4 123.5 96 148.4 96L492.4 96C517.3 96 539.2 112.4 546.2 136.3L569.6 216.5C582.4 260.2 549.5 304 504 304C477.7 304 454.6 289.1 443.2 266.9C431.6 288.8 408.6 304 381.8 304C355.2 304 332.1 289 320.5 267C308.9 289 285.8 304 259.2 304C232.4 304 209.4 288.9 197.8 266.9C186.4 289 163.3 304 137 304C91.4 304 58.6 260.3 71.4 216.5L94.7 136.3zM160.4 416L480.4 416L480.4 349.6C488 351.2 495.9 352 503.9 352C518.2 352 531.9 349.4 544.4 344.8L544.4 496C544.4 522.5 522.9 544 496.4 544L144.4 544C117.9 544 96.4 522.5 96.4 496L96.4 344.8C108.9 349.4 122.5 352 136.9 352C145 352 152.8 351.2 160.4 349.6L160.4 416z"/>
        </svg>
        NuxtStore
      </NuxtLink>

      <!-- Desktop menu -->
      <div class="hidden md:flex ml-auto items-center gap-4">
        <!-- Aquí van las opciones desktop como antes -->
        <NuxtLink v-if="!user" to="/login" class="px-3 py-2 rounded hover:bg-gray-100">Acceder</NuxtLink>
        <div v-else class="flex items-center gap-2">
          <img :src="user.avatar" alt="avatar" class="w-7 h-7 rounded-full" />
          <span class="text-sm">{{ user.name }}</span>
          <button @click="logout" class="p-2 rounded hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-6 h-6"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M569 337C578.4 327.6 578.4 312.4 569 303.1L425 159C418.1 152.1 407.8 150.1 398.8 153.8C389.8 157.5 384 166.3 384 176L384 256L272 256C245.5 256 224 277.5 224 304L224 336C224 362.5 245.5 384 272 384L384 384L384 464C384 473.7 389.8 482.5 398.8 486.2C407.8 489.9 418.1 487.9 425 481L569 337zM224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L160 96C107 96 64 139 64 192L64 448C64 501 107 544 160 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480C142.3 480 128 465.7 128 448L128 192C128 174.3 142.3 160 160 160L224 160z"/></svg></button>
        </div>
      </div>

      <!-- Carrito siempre visible -->
      <NuxtLink to="/cart" class="ml-auto md:ml-4 relative flex items-center justify-center p-2 rounded hover:bg-gray-100 w-10 h-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-6 h-6">
          <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"/>
        </svg>
        <span v-if="count > 0" class="absolute -bottom-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">{{ count }}</span>
      </NuxtLink>

      <!-- Hamburger (mobile) -->
      <button @click="menuOpen = !menuOpen" class="md:hidden p-2 rounded hover:bg-gray-100">
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition name="slide">
      <div v-if="menuOpen" class="md:hidden bg-white border-t border-b px-4 py-4 flex flex-col items-end space-y-2">
        <!-- Usuario logueado -->
        <div v-if="user" class="flex flex-col items-end gap-1">
          <div class="flex items-center gap-2">
            <img :src="user.avatar" alt="avatar" class="w-7 h-7 rounded-full" />
            <span class="text-sm">{{ user.name }}</span>
          </div>
          <button @click="logout" class="text-sm py-1 px-3 bg-red-500 text-white rounded hover:bg-red-600">Salir</button>
        </div>

        <!-- Usuario no logueado -->
        <NuxtLink v-else to="/login" class="block py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-600">Acceder</NuxtLink>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';
import { useCartStore } from '~/store/cart';

const menuOpen = ref(false);

const cart = useCartStore();
const count = computed(() => cart.count);

const { user } = storeToRefs(useAuthStore());
const { logout } = useAuthStore();

function clearSearch() {
  menuOpen.value = false;
  navigateTo({ path: '/' });
}
</script>

<style>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.slide-enter-to, .slide-leave-from {
  max-height: 500px;
  opacity: 1;
  overflow: hidden;
}
</style>
