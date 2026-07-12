<script setup lang="ts">
useSeoMeta({
  title: () => `${post.value?.title} | Blog Fadlan Abduh`,
  description: () => post.value?.custom_excerpt || post.value?.excerpt,
  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.custom_excerpt || post.value?.excerpt,
  ogImage: () => post.value?.feature_image,
  ogType: 'article'
})

throw createError({
  statusCode: 404,
  statusMessage: 'Page Not Found',
  fatal: true
})
</script>