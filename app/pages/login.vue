<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md bg-white p-8 rounded shadow">
      <h2 class="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block mb-1 font-medium">Email</label>
          <input v-model="email" type="email" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-medium">Contraseña</label>
          <input v-model="password" type="password" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div v-if="error" class="mb-4 text-red-600 text-sm">{{ error }}</div>
        <button
          type="submit"
          class="w-full bg-tranparent border border-black text-black py-2 rounded font-semibold hover:bg-purple-300 transition"
          :disabled="loading"
        >
          {{ loading ? 'Ingresando...' : 'Entrar' }}
        </button>
      </form>
      <div class="mt-6 text-center">
        <NuxtLink to="/register" class="text-blue-600 hover:underline text-sm">
          ¿No tienes cuenta? Regístrate
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '~/store/auth';

const auth = useAuthStore();
const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);

async function handleLogin() {
  error.value = '';
  loading.value = true;
  try {
    await auth.login(email.value, password.value);
    await navigateTo({path:'/'});
  } catch (err: any) {
    error.value = err?.data?.message || err.message || 'Credenciales incorrectas';
  } finally {
    loading.value = false;
  }
}
</script>