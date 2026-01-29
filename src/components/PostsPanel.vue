<script setup>
import { ref } from 'vue'
import PostCard from './PostCard.vue'

// Батьківський компонент: список постів
const posts = [
  {
    id: 1,
    title: 'Що таке Vue 3?',
    excerpt: 'Короткий вступ до основ фреймворку.',
    author: 'Ірина'
  },
  {
    id: 2,
    title: 'Шаблони та директиви',
    excerpt: 'v-if, v-for та v-model у простих прикладах.',
    author: 'Максим'
  },
  {
    id: 3,
    title: 'Props і події',
    excerpt: 'Передача даних і подій між компонентами.',
    author: 'Оля'
  }
]

// Стан вибраного поста для демонстрації події з дитини
const selectedTitle = ref('нічого не обрано')
</script>

<template>
  <div class="posts">
    <p class="posts__info">
      Обраний пост: <strong>{{ selectedTitle }}</strong>
    </p>

    <div class="posts__grid">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post-id="post.id"
        :title="post.title"
        :excerpt="post.excerpt"
        :author="post.author"
        @select="selectedTitle = $event"
      />
    </div>
  </div>
</template>
