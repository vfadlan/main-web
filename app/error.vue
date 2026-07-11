<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <h1 class="text-6xl font-bold text-white">{{ error.statusCode }}</h1>
    <p class="mt-4 text-lg text-white">{{ error.statusMessage }}</p>

    <NuxtLink
        to="/"
        class="mt-6 px-4 py-2 rounded bg-primary text-white hover:text-red-500"
    >
      Back Home
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number
    statusMessage: string
  }
}>()
</script>