<!-- components/Footer.vue -->
<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <!-- Logo y descripción -->
      <div>
        <h2 class="text-2xl font-bold mb-3">NuxtStore</h2>
        <p class="text-gray-400">
          La mejor experiencia en productos y servicios digitales. Síguenos en nuestras redes para más novedades.
        </p>
      </div>

      <!-- Enlaces rápidos -->
      <div>
        <h3 class="text-xl font-semibold mb-3">Enlaces</h3>
        <ul class="space-y-2 text-gray-400">
          <li><NuxtLink to="/" class="hover:text-white transition">Inicio</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-white transition">Sobre Nosotros</NuxtLink></li>
          <li><NuxtLink to="/features" class="hover:text-white transition">Características</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-white transition">Contacto</NuxtLink></li>
        </ul>
      </div>

      <!-- Redes sociales -->
      <div>
        <h3 class="text-xl font-semibold mb-3">Síguenos</h3>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-blue-500 transition">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
          </a>
          <a href="#" class="hover:text-blue-400 transition">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
          </a>
          <a href="#" class="hover:text-pink-500 transition">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.403a4.92 4.92 0 0 1 1.757 1.007c.473.473.79 1.005 1.007 1.757.163.458.35 1.258.403 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.428a4.92 4.92 0 0 1-1.007 1.757 4.92 4.92 0 0 1-1.757 1.007c-.458.163-1.258.35-2.428.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.403a4.92 4.92 0 0 1-1.757-1.007 4.92 4.92 0 0 1-1.007-1.757c-.163-.458-.35-1.258-.403-2.428-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.428a4.92 4.92 0 0 1 1.007-1.757A4.92 4.92 0 0 1 4.322 2.636c.458-.163 1.258-.35 2.428-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.013 7.052.072 5.775.131 4.84.312 4.042.533a6.922 6.922 0 0 0-2.514 1.03 6.922 6.922 0 0 0-1.03 2.514C.312 5.16.131 6.095.072 7.372.013 8.652 0 9.056 0 12s.013 3.348.072 4.628c.059 1.277.24 2.212.533 3.01a6.922 6.922 0 0 0 1.03 2.514 6.922 6.922 0 0 0 2.514 1.03c.798.293 1.733.474 3.01.533C8.332 23.987 8.736 24 12 24s3.668-.013 4.948-.072c1.277-.059 2.212-.24 3.01-.533a6.922 6.922 0 0 0 2.514-1.03 6.922 6.922 0 0 0 1.03-2.514c.293-.798.474-1.733.533-3.01.059-1.28.072-1.684.072-4.948s-.013-3.668-.072-4.948c-.059-1.277-.24-2.212-.533-3.01a6.922 6.922 0 0 0-1.03-2.514 6.922 6.922 0 0 0-2.514-1.03c-.798-.293-1.733-.474-3.01-.533C15.668.013 15.264 0 12 0z"/></svg>
          </a>
        </div>
      </div>

    </div>

    <!-- Derechos de autor -->
    <div class="mt-12 text-center text-gray-500 text-sm">
      &copy; {{ new Date().getFullYear() }} NuxtStore. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script setup>

</script>
