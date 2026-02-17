<script setup>
import { ref } from 'vue'

const lessons = ref([
  {
    id: 101,
    title: 'Основи роутінгу',
    excerpt: 'Створюємо маршрути, налаштовуємо router-view і router-link.'
  },
  {
    id: 102,
    title: 'Параметри маршруту',
    excerpt: 'Передаємо id через URL та читаємо його у компоненті.'
  },
  {
    id: 103,
    title: 'Запити та стани',
    excerpt: 'Працюємо з query-параметрами та активними посиланнями.'
  }
])
</script>

<template>
  <main class="page">
    <section class="card">
      <h2>Vue Router — основи</h2>
      <p class="note">
        Нижче приклади навігації через <code>router-link</code> і рендеру через
        <code>router-view</code>.
      </p>

      <div class="router-panel">
        <router-link class="nav-link" to="/">Головна</router-link>
        <router-link class="nav-link" to="/router">Урок про роутер</router-link>
        <router-link class="nav-link" :to="{ name: 'router-post', params: { id: 101 } }">
          Деталі: 101
        </router-link>
      </div>
    </section>

    <section class="card">
      <h3>Список матеріалів</h3>
      <div class="posts__grid">
        <article v-for="lesson in lessons" :key="lesson.id" class="post-card">
          <h4 class="post-card__title">{{ lesson.title }}</h4>
          <p class="post-card__excerpt">{{ lesson.excerpt }}</p>
          <div class="post-card__actions">
            <router-link
              class="btn"
              :to="{ name: 'router-post', params: { id: lesson.id }, query: { source: 'list' } }"
            >
              Відкрити
            </router-link>
            <router-link
              class="btn btn--ghost"
              :to="{ name: 'router-post', params: { id: lesson.id }, query: { preview: '1' } }"
            >
              Превʼю
            </router-link>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
