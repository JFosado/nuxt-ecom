<template>
    <div class="bg-gradient-to-b from-purple-200 to-white">
        <section class="flex flex-col md:flex-row items-center justify-between px-6 py-16  mx-auto max-w-6xl ">
    <div></div>
    <!-- Left Column -->
    <div class="w-full md:w-1/2 mb-10 md:mb-0">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Welcome to Our Store
      </h1>
      <p class="text-lg text-gray-600 mb-6">
        Discover the best products at unbeatable prices. Shop now and enjoy exclusive deals!
      </p>
      <button class="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Shop Now
      </button>
    </div>
    <!-- Right Column -->
    <div class="w-full md:w-1/2 flex justify-center">
      <div class="bg-white rounded-xl shadow-lg p-2 max-w hover:scale-105 transition-transform">
        <nuxt-img
          src="/hero.jpg"
          alt="Products"
          class="rounded-lg object-cover h-80 "
        />
      </div>
    </div>
  </section>
    </div>
  
</template>

<script setup>
// No script needed for static hero
</script>