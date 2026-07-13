<template>
  <Navbar />

  <UMain class="bg-white">
    <Hero />
    <FavBooks />
    <QuotePicker />
    <BlogCatalog />
    <Education />
    <Contact />
  </UMain>

  <Footer />
  <UFooter />
</template>

<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import FavBooks from '~/components/FavBooks.vue'
import QuotePicker from '~/components/QuotePicker.vue'
import BlogCatalog from '~/components/BlogCatalog.vue'
import Education from '~/components/Education.vue'
import Contact from '~/components/Contact.vue'

useHead({
  title: 'Fadlan Abduh | Firmware Engineering',
  meta: [
    {
      name: 'description',
      content: 'Saya menulis kode dan kata, untuk batu silika dan manusia.'
    },
    {
      property: 'og:title',
      content: 'Fadlan Abduh | Firmware Engineering'
    },
    {
      property: 'og:description',
      content: 'Saya menulis kode dan kata, untuk batu silika dan manusia.'
    }
  ],
  script: [
    {
      src: 'https://metrics.fadlanabduh.my.id/script.js',
      defer: true,
      'data-website-id': 'a29ec84e-686d-467b-85a4-7c2cb53c2ab5'
    }
  ]
})

useSeoMeta({
  title: 'Fadlan Abduh | Firmware Engineering',
  description: 'Saya menulis kode dan kata, untuk batu silika dan manusia.',

  ogTitle: 'Fadlan Abduh | Firmware Engineering',
  ogDescription: 'Saya menulis kode dan kata, untuk batu silika dan manusia.',
  ogType: 'website',
  ogUrl: 'https://fadlanabduh.my.id',
  
  twitterCard: 'summary_large_image',
  twitterTitle: 'Fadlan Abduh | Firmware Engineering',
  twitterDescription: 'Saya menulis kode dan kata, untuk batu silika dan manusia.'
})
</script>