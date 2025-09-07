<template>
  <div>
    <!-- Navbar -->
    <header class="fixed top-0 left-0 w-full z-50">
      <nav
        class="flex items-center justify-between px-6 py-4 bg-transparent backdrop-blur-md"
      >
        <!-- Logo -->
        <div class="text-2xl font-bold text-white">
          MyBrand
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex space-x-8 text-white font-medium">
          <li><a href="#" class="hover:text-gray-300">Home</a></li>
          <li><a href="#" class="hover:text-gray-300">About</a></li>
          <li><a href="#" class="hover:text-gray-300">Services</a></li>
          <li><a href="#" class="hover:text-gray-300">Contact</a></li>
        </ul>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden text-white focus:outline-none"
        >
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      <!-- Mobile Dropdown -->
      <div
        v-if="isOpen"
        class="md:hidden bg-black bg-opacity-60 text-white px-6 py-4 space-y-4"
      >
        <a href="#" class="block hover:text-gray-300">Home</a>
        <a href="#" class="block hover:text-gray-300">About</a>
        <a href="#" class="block hover:text-gray-300">Services</a>
        <a href="#" class="block hover:text-gray-300">Contact</a>
      </div>
    </header>

    <!-- Page Content -->
    <main class="min-h-screen text-gray-900 dark:text-gray-100">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
