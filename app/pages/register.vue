<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md bg-white p-8 rounded shadow">
      <h2 class="text-2xl font-bold mb-6 text-center">Crear cuenta</h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="block mb-1 font-medium">Nombre</label>
          <input v-model="name" type="text" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-medium">Email</label>
          <input v-model="email" type="email" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-medium">Contraseña</label>
          <input v-model="password" type="password" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-medium">Avatar (opcional)</label>
          <input v-model="avatar" type="url" placeholder="https://picsum.photos/800" class="w-full px-3 py-2 border rounded" />
        </div>
        <div v-if="error" class="mb-4 text-red-600 text-sm">{{ error }}</div>
        <div v-if="success" class="mb-4 text-green-600 text-sm">{{ success }}</div>
        <button
          type="submit"
          class="w-full bg-purple-600 text-white py-2 rounded font-semibold hover:bg-purple-700 transition"
          :disabled="loading"
        >
          {{ loading ? 'Registrando...' : 'Registrarse' }}
        </button>
      </form>
      <div class="mt-6 text-center">
        <NuxtLink to="/login" class="text-blue-600 hover:underline text-sm">
          ¿Ya tienes cuenta? Inicia sesión
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');
const avatar = ref('https://picsum.photos/800');
const error = ref('');
const success = ref('');
const loading = ref(false);

async function handleRegister() {
  error.value = '';
  success.value = '';
  loading.value = true;
  try {
    await $fetch('https://api.escuelajs.co/api/v1/users/', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
        avatar: avatar.value,
      },
    });
    success.value = '¡Cuenta creada! Ahora puedes iniciar sesión.';
    // Limpiar campos
    name.value = '';
    email.value = '';
    password.value = '';
    avatar.value = 'https://picsum.photos/800';
    // Redirigir después de un breve tiempo
    setTimeout(() => navigateTo('/login'), 1200);
  } catch (err: any) {
    error.value = err?.data?.message || err.message || 'No se pudo registrar';
  } finally {
    loading.value = false;
  }
}
</script>

