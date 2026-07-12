<template>
  <UContainer class="py-12">
    <h2 class="text-3xl font-normal text-zinc-800 dark:text-zinc-200 mb-8">
      Blog Terkini:
    </h2>

    <div v-if="status === 'pending'" class="space-y-6">
      <div v-for="i in 3" :key="i" class="h-48 bg-zinc-100 dark:bg-zinc-800 animate-pulse rounded-2xl" />
    </div>

    <div v-else-if="error" class="text-zinc-500 font-mono text-sm py-4">
      Error loading articles: {{ error.message }}
    </div>

    <!-- Layout Container (Stacked vertically since cards are now horizontal blocks) -->
    <div v-else class="space-y-6">
      <UCard
          v-for="post in posts"
          :key="post.id"
          :ui="{
          root: 'overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm',
          body: 'p-0'
        }"
      >
        <!-- Horizontal Flex Grid -->
        <div class="grid grid-cols-1 md:grid-cols-12 items-stretch">

          <!-- Left Column: Feature Image -->
          <div class="md:col-span-4 aspect-[16/10] md:aspect-auto w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <img
                v-if="post.feature_image"
                :src="post.feature_image"
                :alt="post.title"
                class="w-full h-full object-cover rounded-md"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-zinc-400 font-mono text-xs">
              [No Image Available]
            </div>
          </div>

          <!-- Right Column: Title + Excerpt + Meta Layout Information -->
          <div class="md:col-span-8 p-6 flex flex-col justify-between space-y-4">
            <div class="space-y-3">
              <!-- Tags Row -->
              <div v-if="post.tags && post.tags.length" class="flex flex-wrap gap-2">
                <a
                    v-for="tag in post.tags"
                    :key="tag.id"
                    class="text-xs uppercase font-bold tracking-wider text-primary-600 dark:text-primary-400 bg-rose-100 rounded-full py-2 px-4"
                    :href="`${tag.url}?utm_source=www.fadlanabduh.my.id&utm_medium=blog_catalog&utm_campaign=mainweb`"
                    target="_blank"
                >
                  #{{ tag.name }}
                </a>
              </div>

              <!-- Title linking to article slug context -->
              <a :href="`${post.url}?utm_source=www.fadlanabduh.my.id&utm_medium=blog_catalog&utm_campaign=mainweb`" class="block group" target="_blank">
                <h3 class="text-xl md:text-2xl font-normal text-zinc-900 dark:text-white group-hover:text-primary-600 transition-colors">
                  {{ post.title }}
                </h3>
              </a>

              <!-- Excerpt Description -->
              <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-2">
                {{ post.custom_excerpt || post.excerpt }}
              </p>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800/60 text-xs text-zinc-500 dark:text-zinc-400">
              <a class="flex items-center gap-3" :href="post.primary_author?.url" target="_blank">
                <!-- Author Profile Pic -->
                <img
                    v-if="post.primary_author?.profile_image"
                    :src="post.primary_author.profile_image"
                    :alt="post.primary_author.name"
                    class="w-7 h-7 rounded-full object-cover ring-1 ring-zinc-200 dark:ring-zinc-800"
                />
                <span class="font-medium text-zinc-700 dark:text-zinc-300">
                  {{ post.primary_author?.name || 'Anonymous Author' }}
                </span>
              </a>

              <time :datetime="post.published_at">
                {{ formatDate(post.published_at) }}
              </time>
            </div>

          </div>
        </div>
      </UCard>
    </div>

    <a
        href="https://blog.fadlanabduh.my.id?utm_source=www.fadlanabduh.my.id&utm_medium=blog_catalog&utm_campaign=mainweb"
        target="_blank"
        class="block bg-primary-500 hover:bg-primary-700 active:bg-primary-800 rounded-2xl py-4 px-8 mt-8 text-center text-white font-semibold"
    >
      Jelajahi Tulisan Lainnya
    </a>
  </UContainer>
</template>

<script setup lang="ts">
import { useRuntimeConfig, useAsyncData } from '#app'

interface GhostPost {
  id: string
  title: string
  url: string
  custom_excerpt: string | null
  excerpt: string
  feature_image: string | null
  published_at: string
  primary_author?: {
    name: string
    profile_image: string | null
    url: string
  }
  tags?: Array<{ id: string; name: string; url: string }>
}

const config = useRuntimeConfig()

const { data: posts, status, error } = await useAsyncData<GhostPost[]>('latest-posts', async () => {
  const url = `${config.public.ghostUrl}/ghost/api/content/posts/`

  const response = await $fetch<{ posts: GhostPost[] }>(url, {
    query: {
      key: config.public.ghostKey,
      limit: 3,
      include: 'authors,tags',
      order: 'published_at DESC'
    }
  })

  return response.posts
})

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>