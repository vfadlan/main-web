<script setup lang="ts">

import TextRotator from "~/components/TextRotator.vue";
</script>

<template>
  <div
    class="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center px-6 py-12 md:px-16"
    style="background-image: url('/img/background.jpg');">
    <div class="absolute inset-0 bg-black/10 z-0"></div>

    <div class="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

      <div class="lg:col-span-7 flex flex-col justify-start p-8 md:p-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white shadow-2xl">
        <div class="space-y-6">
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-1">
            Fadlan Abduh
          </h1>

          <text-rotator class="text-2xl mb-4"/>

          <p class="text-base md:text-lg text-zinc-200 max-w-xl leading-relaxed">
            Saya menulis kode dan kata, untuk batu silika dan manusia.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-4 pt-6">
          <UButton
              label="Hubungi Saya"
              icon="i-lucide-arrow-right"
              trailing
              size="xl"
              class="cursor-pointer bg-primary-500 hover:bg-primary-600 active:bg-primary-200 active:text-primary-500"
              to="#kontak"
          />
          <UButton
              label="Baca Blog"
              variant="outline"
              color="neutral"
              size="xl"
              class="text-primary-500 hover:bg-primary-200"
              to="https://blog.fadlanabduh.my.id?utm_source=www.fadlanabduh.my.id&utm_medium=cta&utm_campaign=mainweb"
              target="_blank"
          />
        </div>
      </div>

      <div class="lg:col-span-5 grid grid-cols-2 gap-4">
        <a
            href="https://blog.fadlanabduh.my.id?utm_source=www.fadlanabduh.my.id&utm_medium=cta&utm_campaign=mainweb"
            target="_blank"
            class="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-primary-500/60 hover:border-primary-500/80 transition-all group"
        >
          <img src="/favicon.ico" alt="Blog Fadlan A. Logo" class="w-12 h-12 mb-3">
          <span class="text-sm font-medium tracking-wide">Blog</span>
        </a>

        <a
            href="https://metrics.fadlanabduh.my.id/q/github"
            target="_blank"
            class="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-slate-800/60 hover:border-slate-800/80 transition-all group"
        >
          <UIcon name="i-lucide-github" class="w-12 h-12 mb-3 text-zinc-300 group-hover:text-white" />
          <span class="text-sm font-medium tracking-wide">GitHub</span>
        </a>

        <a
            href="https://metrics.fadlanabduh.my.id/q/instagram"
            target="_blank"
            class="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-pink-500/60 hover:border-pink-500/80 transition-all group"
        >
          <UIcon name="i-lucide-instagram" class="w-12 h-12 mb-3 text-zinc-300 group-hover:text-white" />
          <span class="text-sm font-medium tracking-wide">Instagram</span>
        </a>

        <a
            href="https://metrics.fadlanabduh.my.id/q/facebook"
            target="_blank"
            class="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-blue-600/50 hover:border-blue-600/70 transition-all group"
        >
          <UIcon name="i-lucide-facebook" class="w-12 h-12 mb-3 text-zinc-300 group-hover:text-white" />
          <span class="text-sm font-medium tracking-wide">Facebook</span>
        </a>

        <a
            href="https://metrics.fadlanabduh.my.id/q/linkedin"
            target="_blank"
            class="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-sky-700/50 hover:border-sky-700/70 transition-all group"
        >
          <UIcon name="i-lucide-linkedin" class="w-12 h-12 mb-3 text-zinc-300 group-hover:text-white" />
          <span class="text-sm font-medium tracking-wide">LinkedIn</span>
        </a>

        <a
            href="https://metrics.fadlanabduh.my.id/q/cv"
            target="_blank"
            class="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-neutral-800/30 hover:border-neutral-800/60 transition-all group"
        >
          <UIcon name="i-lucide-file-text" class="w-12 h-12 mb-3 text-zinc-300 group-hover:text-white" />
          <span class="text-sm font-medium tracking-wide">Resume</span>
        </a>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>