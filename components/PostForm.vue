<script setup lang="ts">
const { parentId } = defineProps<{
  parentId?: string;
}>();
const emit = defineEmits<{
  (event: "submit"): void;
}>();

const name = ref("");
const text = ref("");

const router = useRouter();

async function create() {
  await $fetch("/api/posts", {
    method: "POST",
    body: { name: name.value, text: text.value, parentId: parentId },
  });
  text.value = "";
  router.push("/");
  emit("submit");
}
</script>

<template>
  <UContainer class="text-right w-full">
    <form @submit.prevent="create">
      <UInput v-model="name" placeholder="お名前" class="w-40" />
      <UTextarea v-model="text" placeholder="本文" />
      <UButton type="submit">投稿</UButton>
    </form>
  </UContainer>
</template>
