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
            <h3 class="text-2xl font-light tracking-wide text-zinc-900 dark:text-white">
              {{ book.title }}
            </h3>
            <p class="text-sm italic font-medium text-zinc-700 dark:text-zinc-400">
              by {{ book.author }}
            </p>
          </div>

          <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mt-6 text-left">
            {{ book.description }}
          </p>
        </div>
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
}

const books: Book[] = [
  {
    title: 'The Midnight Library',
    author: 'Matt Haig',
    description: "A young woman's journey navigating existential choices within a mysterious library after a suicide attempt.",
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop' // Swap with actual cover image asset paths
  },
  {
    title: 'Cosmos',
    author: 'Carl Sagan',
    description: 'An introductory to science. It explains almost everything starting from the big bang to our culture and exploration to outer space. This is the book that made me fall in love with science and books.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    description: 'A famous old Russian literature that still worth to read. Story about a murder, and its punishment for the rest of the book.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop'
  }
]
</script>