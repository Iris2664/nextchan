<script setup lang="ts">
import { onMounted, ref } from "vue";

const posts = ref<PostResponse[]>([]);
const refresh = ref<() => Promise<void>>(() => Promise.resolve());

onMounted(async () => {
  const { data, refresh: r } = await useFetch<PostResponse[]>("/api/posts");
  if (data.value) {
    posts.value = data.value;
  }
  refresh.value = r;
});
</script>

<template>
  <main class="flex flex-col gap-4">
    <PostForm @submit="refresh" />

    <PostCard
      v-for="post in posts"
      :key="post._id"
      :_id="post._id"
      :name="post.name"
      :text="post.text"
      :parent="post.parent"
      :createdAt="post.createdAt"
    />
  </main>
</template>