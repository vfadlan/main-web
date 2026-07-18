<template>
  <div class="text-zinc-800 bg-gradient-to-tr from-primary-500 via-primary-500 to-orange-600 relative w-full">
    <div class="py-12 px-6 max-w-4xl mx-auto">

      <Transition name="fade-slide" mode="out-in">
        <div :key="selectedQuote?.text" v-if="selectedQuote" class="space-y-4">
          <p class="text-3xl font-light tracking-wide leading-relaxed text-white">
            “{{ selectedQuote.text }}”
          </p>

          <p class="text-xl font-light text-zinc-200 dark:text-zinc-400">
            ~ {{ selectedQuote.author }}
          </p>
        </div>
      </Transition>

      <div class="mt-6">
        <UButton
            id="shuffle-quote"
            icon="i-lucide-shuffle"
            size="xl"
            variant="solid"
            class="cursor-pointer text-white bg-primary-500 hover:bg-primary-700 active:bg-primary-800"
            data-umami-event="shuffle_quote_clicked"
            @click="pickNextQuote()"
        />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Quote {
  text: string
  author: string
}

const quotes: Quote[] = [
  {
    text: 'If you remember me, then I don\'t care if everyone else forgets.',
    author: 'Haruki Murakami (Kafka On The Shore)'
  },
  {
    text: 'Whatever it is you\'re seeking won\'t come in the form you\'re expecting.',
    author: 'Haruki Murakami (Kafka on The Shore)'
  },
  {
    text: 'Somewhere, something incredible is waiting to be known.',
    author: 'Carl Sagan'
  },
  {
    text: 'One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.',
    author: 'Carl Sagan (Cosmos)'
  },
  {
    text: 'When we are no longer able to change a situation, we are challenged to change ourselves.',
    author: 'Viktor Frankl (Man\'s Search for Meaning)'
  },
  {
    text: 'Happiness cannot be pursued; it must ensue.',
    author: 'Viktor Frankl (Man\'s Search for Meaning)'
  },
  {
    text: 'When stupid ideas work, they become genius ideas.',
    author: 'Andy Weir (Project Hail Mary)'
  },
  {
    text: 'Sometimes, the stuff we all hate ends up being the only way to do things.',
    author: 'Andy Weir (Project Hail Mary)'
  },
  {
    text: 'In the depth of winter, I finally learned that within me there lay an invincible summer.',
    author: 'Albert Camus'
  },
  {
    text: 'Nobody realizes that some people expend tremendous energy merely to be normal.',
    author: 'Albert Camus'
  },
  {
    text: 'For you, a thousand times over.',
    author: 'Khaled Hosseini (The Kite Runner)'
  },
  {
    text: 'The only way to learn is to live.',
    author: 'Matt Haig (The Midnight Library)'
  },
  {
    text: 'If you aim to be something you are not, you will always fail. Aim to be you. Aim to look and act and think like you.',
    author: 'Matt Haig (The Midnight Library)'
  },
  {
    text: 'You don’t have to understand life. You just have to live it.',
    author: 'Matt Haig (The Midnight Library)'
  },
  {
    text: 'Menulis adalah sebuah keberanian...',
    author: 'Pramoedya Ananta Toer'
  },
  {
    text: 'Orang boleh pandai setinggi langit, tapi selama ia tidak menulis, ia akan hilang di dalam masyarakat dan dari sejarah.',
    author: 'Pramoedya Ananta Toer'
  }
]

const shuffledQuotes = ref<Quote[]>([])
const currentIndex = ref(0)
const selectedQuote = ref<Quote>()

const shuffleArray = (array: Quote[]) => {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const pickNextQuote = () => {
  if (shuffledQuotes.value.length === 0) return

  selectedQuote.value = shuffledQuotes.value[currentIndex.value]

  currentIndex.value = (currentIndex.value + 1) % shuffledQuotes.value.length
}

onMounted(() => {
  shuffledQuotes.value = shuffleArray(quotes)

  pickNextQuote()
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from {
  transform: translateY(12px);
  opacity: 0;
}

.fade-slide-leave-to {
  transform: translateY(-12px);
  opacity: 0;
}
</style>