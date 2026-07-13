<script setup lang="ts">
useHead({
  title: 'Petunjuk Chopin',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
interface YoutubeEmbedProps {
  videoId?: string
  title?: string
}

const props = withDefaults(defineProps<YoutubeEmbedProps>(), {
  videoId: 'taY5oHleS4I', // ID dari video Chopin: Waltz No. 1 yang kamu berikan
  title: 'Seong-Jin Cho - Chopin: Ballade No.1 In G Minor, Op.23'
})

const embedUrl = computed(() => `https://www.youtube.com/embed/${props.videoId}`)
</script>

<template>
  <div class="video-container">
    <iframe
        :src="embedUrl"
        :title="title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
    ></iframe>
  </div>
  <p>Langkah terakhir ada di depan mata. Istirahat dan dengarkanlah melodi ini. Kunci gerbang penutup terikat pada judul musiknya. Butuh petunjuk tambahan? Periksa paket header halaman ini.</p>
  <a href="https://metrics.fadlanabduh.my.id/q/GDkJWnYhB" class="text-red-500 underline">https://metrics.fadlanabduh.my.id/q/GDkJWnYhB</a>
</template>

<style scoped>
:global(html), :global(body) {
  background-color: white !important;
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Rasio aspek 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>