<script setup>
const props = defineProps({
  post: { type: Object, required: true },
  loading: { type: Boolean, default: false }
})

const emit = defineEmits(['edit', 'delete'])

const handleEdit = () => emit('edit', props.post)
const handleDelete = () => emit('delete', props.post.id)
</script>

<template>
  <article class="post-card">
    <h4 class="post-card__title">{{ post.title }}</h4>
    <p class="post-card__excerpt">{{ post.body }}</p>
    <p class="post-card__meta">ID: {{ post.id }}</p>
    <div class="post-card__actions">
      <button type="button" class="btn btn--ghost" :disabled="loading" @click="handleEdit">
        Редагувати
      </button>
      <button type="button" class="btn" :disabled="loading" @click="handleDelete">
        Видалити
      </button>
    </div>
  </article>
</template>
