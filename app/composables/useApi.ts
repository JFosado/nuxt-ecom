// composables/useApi.ts
export function useApi() {
const config = useRuntimeConfig();
const token = useCookie<string | null>('token', { sameSite: 'lax' });


const apiFetch = $fetch.create({
baseURL: config.public.apiBase as string,
onRequest({ options }) {
options.headers = new Headers({
  ...(Object.fromEntries((options.headers as Headers)?.entries?.() || [])),
  ...(token.value ? { Authorization: `Bearer ${token.value}` } : {}),
});
},
onResponseError({ response }) {
console.error('API error', response.status, response._data);
throw createError({
statusCode: response.status,
statusMessage: response._data?.message || 'Error en la API',
});
},
});


return { apiFetch };
}