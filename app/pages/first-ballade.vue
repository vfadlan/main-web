<script setup lang="ts">
import { ref, onMounted } from 'vue'

useHead({
  title: 'The Second Piano Concerto',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

const finalFlag = 'FLAG{Simsalabim-Abracadabra}'
const visitorCount = ref<number | string>('?')

onMounted(async () => {
  try {
    const res = await $fetch<{ success: boolean; visitorNumber: number }>('/api/count-explorer', {
      method: 'GET'
    })
    if (res && res.success) {
      visitorCount.value = res.visitorNumber
    }
  } catch (err) {
    console.error('Gagal memuat hitungan explorer:', err)
    visitorCount.value = 0
  }
})

const currentPage = ref(1)
const totalPages = 3

const nextPage = () => { if (currentPage.value < totalPages) currentPage.value++ }
const prevPage = () => { if (currentPage.value > 1) currentPage.value-- }

console.log("You've won, buddy. What are you looking for?")
console.log("Here's one last gift, the amount of people that've been rick rolled:")
console.log("https://metrics.fadlanabduh.my.id/share/IPYoBDzOCWeaZIlR")
</script>

<template>
  <div class="min-h-screen bg-neutral-950 text-neutral-200 flex flex-col items-center justify-center p-6">
    <div class="w-full max-w-2xl space-y-8 text-center">

      <header class="space-y-2">
        <h1 class="text-4xl font-extrabold tracking-tight text-white font-serif">
          The Second Piano Concerto
        </h1>
        <p class="text-neutral-400 italic">
          "Simfoni terakhir untuk perjalananmu ke sini."
        </p>
      </header>

      <div class="shadow-2xl border border-neutral-800 rounded-xl overflow-hidden">
        <div class="shadow-2xl border border-neutral-800 rounded-xl overflow-hidden aspect-video w-full bg-black">
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/8pgyqI_nHws"
            title="Rachmaninov's Piano Concerto No.2 - II. Adagio sostenuto"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="min-h-[220px] flex flex-col justify-between bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-6 shadow-inner">
        <article class="text-sm text-neutral-400 leading-relaxed text-justify font-sans space-y-3">
          <div v-if="currentPage === 1" class="space-y-3 animate-fade-in">
            <p>
              &emsp;&emsp;Anda telah menuntaskan perjalanan panjang ini. Musik yang sedang Anda dengar adalah sebuah monumen kebangkitan dari titik terendah dalam hidup Sergei Rachmaninoff. Dengarkanlah sembari Anda membaca paragraf-paragraf berikut.
            </p>
            <p>
              &emsp;&emsp;Setelah debut tragis Symphony No. 1 miliknya hancur total oleh kritik pedas publik pada tahun 1897, Rachmaninoff mengalami trauma psikologis yang sangat mendalam. Ia jatuh ke dalam depresi klinis yang parah, mengalami <span class="text-neutral-300">burnout</span> total, dan kehilangan seluruh kemampuan kreatifnya untuk menulis musik selama hampir tiga tahun.
            </p>
          </div>

          <div v-if="currentPage === 2" class="space-y-3 animate-fade-in">
            <p>
              &emsp;&emsp;Melodi <span class="italic">Adagio sostenuto</span> ini lahir setelah beliau berhasil memulihkan kepercayaan dirinya melalui terapi intensif bersama Dr. Nikolai Dahl. Reruntuhan kreatif tersebut akhirnya lebur dana bertransformasi menjadi salah satu konserto paling megah yang pernah ditulis. Karya ini melambangkan titik balik dan sebuah akhir dari sebuah perjuangan batin yang panjang.
            </p>
            <p>
              &emsp;&emsp;Melalui halaman ini, saya ingin menyampaikan apresiasi yang sangat besar kepada Anda. Terima kasih karena telah meluangkan waktu untuk berputar-putar di situs ini, menelusuri setiap sudut halaman, dan membaca tulisan-tulisan di blog saya. Mengetahui bahwa ada seseorang yang bersedia menggali <i>rabbit hole</i> ini memberikan arti yang sangat besar, terutama di tengah sepinya lalu lintas pengunjung situs ini.
            </p>
          </div>

          <div v-if="currentPage === 3" class="space-y-3 animate-fade-in">
            <p>
              &emsp;&emsp;Konserto ini berdiri sebagai salah satu puncak tertinggi di akhir era Romantisisme yang memuliakan kebebasan ekspresi jiwa dan arus intuisi murni. Sama seperti dialog harmonis antara piano dan orkestra yang melampaui ruang dan waktu, usaha Anda dalam memecahkan setiap teka-teki digital di sini telah mencapai konklusi sempurnanya.
            </p>
            <div class="p-4 my-4 bg-neutral-900/80 border border-neutral-800 rounded-lg text-center font-mono">
              <p class="text-sm text-neutral-300">
                Selamat! Anda adalah pengunjung ke-<span class="text-emerald-400 font-bold text-base">{{visitorCount}}</span> yang berhasil mencapai halaman akhir ini.
              </p>
            </div>
            <p>
              &emsp;&emsp;Perjalanan Anda menembus logika kaku dan melintasi arsitektur jaringan telah selesai. Istirahatlah sejenak, nikmati sisa denting pianonya, melodi terindah ada di menit-menit terakhir. Silakan ambil flag kemenangan yang telah menjadi hak Anda di bawah ini.
            </p>
            <p>
              Jangan malu-malu untuk menghubungi saya dan memamerkan bendera yang Anda peroleh.
            </p>
          </div>
        </article>

        <div class="flex items-center justify-between mt-6 pt-4 border-t border-neutral-800/50">
          <button
              @click="prevPage"
              :disabled="currentPage === 1"
              class="px-4 py-2 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 disabled:text-slate-300 disabled:hover:bg-neutral-900 transition-all"
          >
            &larr; PREV
          </button>

          <span class="text-xs font-mono text-neutral-500">
            Halaman {{ currentPage }} dari {{ totalPages }}
          </span>

          <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="px-4 py-2 text-xs font-mono rounded bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 disabled:text-slate-300 disabled:hover:bg-neutral-900 transition-all"
          >
            NEXT &rarr;
          </button>
        </div>
      </div>

      <div v-if="currentPage === totalPages" class="p-6 bg-neutral-900 border border-neutral-800 rounded-xl space-y-3 transition-all">
        <span class="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
          Final Flag Captured
        </span>
        <div class="flex items-center justify-center gap-3 bg-black p-3 rounded border border-neutral-800">
          <code class="text-emerald-400 font-mono text-sm md:text-base select-all">
            {{ finalFlag }}
          </code>
        </div>
      </div>

      <hr class="border-neutral-800"/>

      <footer class="text-xs text-neutral-600 font-mono">
        &copy; 2026 fadlanabduh.my.id &bull; Connection Closed.
      </footer>
    </div>
  </div>
  <img src="https://metrics.fadlanabduh.my.id/p/8eSlLLL4e" />
</template>

<style scoped>
button {
  cursor: pointer;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateX(-4px); }
  to { opacity: 1; transform: translateX(0); }
}
</style>