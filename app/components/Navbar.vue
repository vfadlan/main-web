<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Blog',
    to: 'https://blog.fadlanabduh.my.id?utm_source=www.fadlanabduh.my.id&utm_medium=navbutton&utm_campaign=mainweb',
    target: '_blank'
  },
  {
    label: 'Kontak',
    to: '#kontak'
  }
])
</script>

<template>
  <UHeader class="bg-primary-500/80 border-0">
    <template #title>
      <p class="text-slate-100">Fadlan Abduh</p>
    </template>

    <template #right>
      <UNavigationMenu :items="items" class="hidden sm:flex text-white" :ui="{ link: 'text-white/80 hover:text-black/90' }"/>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="p-4" :ui="{ link: 'text-black/70 hover:text-black/90' }"/>
    </template>
  </UHeader>
</template>
