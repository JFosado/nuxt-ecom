<template>
  <div class="bg-gradient-to-b from-gray-400 to-white overflow-hidden">
    <section class="flex flex-col md:flex-row items-center justify-between px-6 py-16 mx-auto max-w-6xl relative">
      
      <!-- Left Column -->
      <div class="w-full md:w-1/2 mb-10 md:mb-0 hero-left">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 hero-title">
          Welcome to Our Store
        </h1>
        <p class="text-lg text-gray-600 mb-6 hero-text">
          Discover the best products at unbeatable prices. Shop now and enjoy exclusive deals!
        </p>
        <button class="bg-purple-600 text-white px-6 py-3 rounded-lg hero-button hover:bg-purple-700 transition">
          Shop Now
        </button>
      </div>

      <!-- Right Column -->
      <div class="w-full md:w-1/2 flex justify-center hero-right">
        <div class="bg-white rounded-xl shadow-lg p-2 max-w-lg hero-image">
          <nuxt-img
            src="/hero.jpg"
            alt="Products"
            class="rounded-lg object-cover h-80 w-full"
          />
        </div>
      </div>

    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

 
  tl.from(".hero-title", { x: -50, opacity: 0 })
    .from(".hero-text", { x: -50, opacity: 0 }, "-=0.5")
    .from(".hero-button", { y: 20, opacity: 0 }, "-=0.5");


  gsap.from(".hero-image", { scale: 0.8, opacity: 0, duration: 1.2, delay: 0.5 });


  const heroSection = document.querySelector(".hero-right")!;
  heroSection.addEventListener("mousemove", (event) => {
    const e = event as MouseEvent;
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    gsap.to(".hero-image", { rotationY: x, rotationX: -y, transformPerspective: 500, transformOrigin: "center", duration: 0.5 });
  });

  heroSection.addEventListener("mouseleave", () => {
    gsap.to(".hero-image", { rotationY: 0, rotationX: 0, duration: 0.5 });
  });
});
</script>

<style scoped>
.hero-left {
  z-index: 10;
}

.hero-right {
  perspective: 1000px;
}
</style>
