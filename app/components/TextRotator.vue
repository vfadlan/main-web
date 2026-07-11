<template>
  <span class="inline-block relative min-w-[280px]">
    <Transition name="slide">
      <span
          :key="currentIndex"
          class="absolute left-0 top-0 text-red-500 font-bold"
      >
        {{ titles[currentIndex] }}
      </span>
    </Transition>
    <span class="opacity-0 font-bold select-none" aria-hidden="true">
      Firmware Dev. & Maker
    </span>
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const titles = ['Penulis', 'Mechatronics Student', 'Fellow Reader', 'Firmware Dev. & Maker']
const currentIndex = ref(0)
let timer: ReturnType<typeof setInterval>

onMounted(() => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % titles.length
  }, 1500) // Rotates every 2.5 seconds
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-enter-from {
  transform: translateY(12px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(-12px);
  opacity: 0;
}
</style>