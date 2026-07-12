<template>
  <UContainer class="py-12">
    <h2 class="text-3xl font-normal text-zinc-800 dark:text-zinc-200 mb-8">
      Tiga Buku Favoritku:
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      <UCard
          v-for="book in books"
          :key="book.title"
          :ui="{
          root: 'overflow-hidden flex flex-col h-full border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm',
          body: 'padding-0 flex-1 flex flex-col'
        }"
      >
        <div class="aspect-[4/5] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <img
              :src="book.image"
              :alt="book.title"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-102 rounded-md"
          />
        </div>

        <!-- Text Description Box -->
        <div class="p-6 flex flex-col flex-1 text-center justify-between">
          <div class="space-y-2">
            <h3 class="text-2xl font-light tracking-wide text-zinc-900 ">
              {{ book.title }}
            </h3>
            <p class="text-sm italic font-medium text-zinc-700 ">
              by {{ book.author }}
            </p>
          </div>

          <p class="text-sm leading-relaxed text-zinc-800 mt-6 text-left">
            {{ book.description }}
          </p>
        </div>

        <UButton
            label="Goodreads"
            variant="outline"
            color="neutral"
            size="xl"
            icon="i-lucide-book-marked"
            class="text-primary-500 hover:bg-primary-50"
            :ui="{ base: 'justify-center text-center w-full' }"
            :to="book.goodreads"
            target="_blank"
        />
      </UCard>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
interface Book {
  title: string
  author: string
  description: string
  image: string
  goodreads: string
}

const books: Book[] = [
  {
    title: 'The Midnight Library',
    author: 'Matt Haig',
    description: "Perjalanan seorang wanita muda dalam menjelajahi pilihan-pilihan eksistensial di dalam sebuah perpustakaan misterius setelah sebuah percobaan bunuh diri.",
    image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg',
    goodreads: 'https://www.goodreads.com/book/show/52578297-the-midnight-library?ref=nav_sb_ss_1_12'
  },
  {
    title: 'Kosmos',
    author: 'Carl Sagan',
    description: 'Sebuah pengantar sains. Buku ini menjelaskan hampir semua hal mulai dari dentuman besar (big bang) hingga budaya kita dan penjelajahan ke luar angkasa.',
    image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1251701652i/6782803.jpg',
    goodreads: 'https://www.goodreads.com/book/show/6782803-kosmos?ref=nav_sb_ss_1_1'
  },
  {
    title: 'Tentang Kamu',
    author: 'Tere Liye',
    description: 'Sebuah biografi fiksi. Perjalanan pengacara dalam menyelidiki kisah hidup seorang Sri Ningsih. Anak pedalaman negeri yang mewarisi satu miliar poundsterling.',
    image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1475659479i/32467509.jpg',
    goodreads: 'https://www.goodreads.com/book/show/32467509-tentang-kamu'
  }
]
</script>