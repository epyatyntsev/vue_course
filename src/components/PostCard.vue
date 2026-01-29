<script setup>
// Дочірній компонент: отримує дані через props
const props = defineProps({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  author: { type: String, required: true },
  postId: { type: Number, required: true }
})

// Надсилаємо подію до батьківського компонента
const emit = defineEmits(['select'])

const selectPost = () => {
  // Передаємо готове значення без додаткового пошуку в батьківському компоненті
  emit('select', props.title)
}
</script>

<template>
  <article class="post-card">
    <h3 class="post-card__title">{{ title }}</h3>
    <p class="post-card__excerpt">{{ excerpt }}</p>
    <p class="post-card__meta">Автор: {{ author }}</p>

    <div class="post-card__actions">
      <button type="button" class="btn" @click="selectPost">
        Відкрити
      </button>
    </div>
  </article>
</template>
