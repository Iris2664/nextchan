<script setup lang="ts">
const route = useRoute();
const post = ref<PostResponse | null>(null);

onMounted(async () => {
    const { data } = await useFetch<PostResponse>(`/api/posts/${route.params.id}`);
    post.value = data.value;
});
</script>

<template>
    <template>
    <main class="flex flex-col gap-4">
         <PostCard
            v-if="post"
            :key="post._id"
            :_id="post._id"
            :name="post.name"
            :text="post.text"
            :parent="post.parent"
            :createdAt="post.createdAt"
         />
        <PostForm v-if="post" :parentId="post._id" />
    </main>
</template>
</template>