<template>
  <div>
    <nav :class="`bg-gray-100 dark:bg-gray-800 p-4 shadow-md ${themeColor}`">
      <div class="flex justify-between items-center mx-auto max-w-7xl">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Ziaul Hassan</h1>

        <div class="flex gap-4">
          <!-- Theme mode selector -->
          <select v-model="mode" @change="applyMode" class="border rounded p-1 text-sm dark:bg-gray-700 dark:text-white">
            <option value="light">🌞 Light</option>
            <option value="dark">🌙 Dark</option>
          </select>

          <!-- Color theme selector -->
          <select v-model="color" @change="applyColor" class="border rounded p-1 text-sm dark:bg-gray-700 dark:text-white">
            <option value="purple">🟣 Purple</option>
            <option value="blue">🔵 Blue</option>
            <option value="green">🟢 Green</option>
            <option value="red">🔴 Red</option>
          </select>
        </div>
      </div>

      <div class="container mx-auto flex justify-center items-center mt-4">
        <ul class="flex gap-10">
          <li><NuxtLink :class="linkClass" to="/">Services</NuxtLink></li>
          <li><NuxtLink :class="linkClass" to="/about">Resume</NuxtLink></li>
          <li><NuxtLink :class="linkClass" to="/contact">Works</NuxtLink></li>
          <li><NuxtLink :class="linkClass" to="/">Skills</NuxtLink></li>
          <li><NuxtLink :class="linkClass" to="/about">Testimonial</NuxtLink></li>
          <li><NuxtLink :class="linkClass" to="/contact">Contact</NuxtLink></li>
        </ul>
      </div>
    </nav>

    <main class="p-4 bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <slot />
    </main>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue'

const mode = ref('light')
const color = ref('purple')

const themeColor = computed(() => {
  return {
    purple: 'text-[#480092]',
    blue: 'text-blue-700',
    green: 'text-green-700',
    red: 'text-red-700',
  }[color.value]
})

const linkClass = computed(() =>
    `text-gray-700 dark:text-gray-200 hover:${themeColor.value} font-medium`
)

onMounted(() => {
  const savedMode = localStorage.getItem('theme-mode')
  const savedColor = localStorage.getItem('theme-color')
  if (savedMode) mode.value = savedMode
  if (savedColor) color.value = savedColor
  applyMode()
})

function applyMode() {
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(mode.value)
  localStorage.setItem('theme-mode', mode.value)
}

function applyColor() {
  localStorage.setItem('theme-color', color.value)
}
</script>

