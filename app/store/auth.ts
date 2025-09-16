import { defineStore } from 'pinia';
import { useApi } from '~/composables/useApi';


interface UserProfile { id: number; name: string; email: string; avatar?: string }


export const useAuthStore = defineStore('auth', () => {
const { apiFetch } = useApi();
const token = useCookie<string | null>('token', { sameSite: 'lax' });
const user = ref<UserProfile | null>(null);
const loading = ref(false);


async function login(email: string, password: string) {
loading.value = true;
try {
const { access_token } = await apiFetch<{ access_token: string }>('/auth/login', {
method: 'POST',
body: { email, password },
});
token.value = access_token;
await fetchProfile();
} finally {
loading.value = false;
}
}


async function fetchProfile() {
if (!token.value) return;
user.value = await apiFetch<UserProfile>('/auth/profile');
}


function logout() {
token.value = null;
user.value = null;
}


return { token, user, loading, login, fetchProfile, logout };
});