<style scoped>
  h1 {
    font-size: 1.5rem;
    color: black;
  }

  .date {
    color: #315148;
    margin-bottom: 12px;
  }

  h2 {
    font-size: 1.3rem;
    color: #0f172b;
    margin-bottom: 8px;
  }

  p, li {
    font-size: 1.1rem;
    color: #0f172b;
    margin-bottom: 8px;
    text-justify: inter-word;
  }

  ul {
    margin-left: 16px;
  }
  li {
    padding-left: 16px;
  }

  hr {
    margin: 24px auto;
    color: #4d4d4d;
    max-width: 65%;
  }

  a {
    text-decoration: underline;
    color: #ae0d11;
  }
</style>

<template>
  <!--
======================================================================

 Anda berhasil menemukan penyusun kebijakan-kebijakan privasi ini. Lanjutkan.

 PETUNJUK:
 "Aku adalah pengamat yang tak terlihat, merekam jejakmu di balik layar
 dunia maya. Carilah tulisan tentang diriku di jurnal daring (Blog).
 Namun, jangan hanya membaca apa yang tampak di permukaan teksnya."

 P.S.: panggilah franz melalui panel tepi, ia akan memberikanmu bantuan.

======================================================================
-->
  <Navbar />

  <UMain class="bg-white">
    <UContainer class="py-12 max-w-6xl text-justify">
      <h1>Kebijakan Privasi</h1>
      <p class="date">Diperbarui Tanggal: 13 Juli 2026</p>

      <h2>1. Pendahuluan</h2>
      <p>&emsp;&emsp;Situs ini (www.fadlanabduh.my.id) dikelola oleh Fadlan Abduh Erman Nawa ("saya"), sebagai individu, sekaligus bertindak sebagai pengendali data <i>(data controller)</i> atas data pribadi yang diproses melalui situs ini. Kebijakan ini menjelaskan data apa yang diproses saat Anda mengakses situs ini, oleh siapa, dan untuk tujuan apa, sesuai dengan Undang-Undang Perlindungan Data Pribadi (UU PDP).</p>

      <hr/>
      <h2>2. Pihak Ketiga</h2>
      <p>&emsp;&emsp;Situs ini menggunakan layanan pihak ketiga berikut:</p>
      <ul class="list-disc">
        <li>Cloudflare Turnstile: digunakan untuk memverifikasi bahwa pengunjung formulir kontak adalah manusia, bukan bot. Turnstile dapat memproses data perangkat/browser Anda di server Cloudflare.</li>
        <li>Brevo API: digunakan untuk mengirimkan email dari formulir kontak. Jika Anda mengirim pesan melalui formulir, nama dan alamat email Anda diproses oleh Brevo sebagai penyedia layanan pengiriman email.</li>
      </ul>

      <hr/>
      <h2>3. Analitik</h2>
      <p>&emsp;&emsp;Situs ini menggunakan Umami, alat analitik yang tidak menggunakan <i>cookie</i>. Data diproses berdasarkan kepentingan sah <i>(legitimate interest)</i> untuk memahami penggunaan situs, tanpa melacak individu secara persisten. Analitik ini digunakan untuk memantau:</p>
      <ul class="list-disc">
        <li>klik ke tautan eksternal (mis. Instagram, Facebook, LinkedIn, dll.),</li>
        <li>klik menuju blog (melalui tag referensi/ref tag), dan</li>
        <li>cara pengunjung mengakses dan menggunakan situs ini (mis. halaman yang dikunjungi, sumber kunjungan).</li>
      </ul>
      <p>&emsp;&emsp;Umami tidak menyimpan pengenal <i>(identifier)</i> yang bertahan lama dan tidak membagikan data ke pihak ketiga untuk iklan.</p>

      <hr/>
      <h2>4. Dasar Hukum Pemrosesan</h2>
      <ul class="list-disc">
        <li>Kepentingan sah: analitik Umami untuk memahami dan meningkatkan situs.</li>
        <li>Kebutuhan layanan: Turnstile untuk mencegah spam/bot pada formulir kontak.</li>
        <li>Persetujuan: data yang Anda kirimkan secara sukarela melalui formulir kontak (nama, email, pesan).</li>
      </ul>

      <hr/>
      <h2>5. Hak Anda</h2>
      <p>Anda berhak untuk meminta informasi mengenai data pribadi Anda yang diproses, meminta koreksi, atau meminta penghapusan data yang Anda kirimkan melalui formulir kontak.</p>

      <hr/>
      <h2>6. Kontak</h2>
      <p>Jika Anda memiliki pertanyaan mengenai kebijakan ini atau ingin menggunakan hak Anda, silakan hubungi saya melalui
        <ULink to="/#kontak">formulir kontak</ULink> atau email <a href="mailto:fadlanabduh@gmail.com">fadlanabduh@gmail.com</a>.</p>
    </UContainer>
  </UMain>

  <Footer />
  <UFooter />
</template>

<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'

useHead({
  title: 'Kebijakan Privasi | Fadlan Abduh',
  meta: [
    {
      name: 'description',
      content: 'Penggunaan analitika dan layanan pihak ketiga dengan tetap menghargai privasi Anda.'
    },
    {
      property: 'og:title',
      content: 'Kebijakan Privasi | Fadlan Abduh'
    },
    {
      property: 'og:description',
      content: 'Penggunaan analitika dan layanan pihak ketiga dengan tetap menghargai privasi Anda.'
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
  title: 'Kebijakan Privasi | Fadlan Abduh',
  description: 'Penggunaan analitika dan layanan pihak ketiga dengan tetap menghargai privasi Anda.',

  ogTitle: 'Kebijakan Privasi | Fadlan Abduh',
  ogDescription: 'Penggunaan analitika dan layanan pihak ketiga dengan tetap menghargai privasi Anda.',
  ogType: 'website',
  ogUrl: 'https://fadlanabduh.my.id',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Kebijakan Privasi | Fadlan Abduh',
  twitterDescription: 'Penggunaan analitika dan layanan pihak ketiga dengan tetap menghargai privasi Anda.'
})
</script>