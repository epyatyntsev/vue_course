<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const postId = computed(() => Number(route.params.id))
const source = computed(() => route.query.source || 'direct')
const isPreview = computed(() => route.query.preview === '1')

const goNext = () => {
  router.push({ name: 'router-post', params: { id: postId.value + 1 } })
}

const goPrev = () => {
  const prevId = postId.value > 1 ? postId.value - 1 : 1
  router.push({ name: 'router-post', params: { id: prevId } })
}
</script>

<template>
  <main class="page">
    <section class="card">
      <h2>Деталі матеріалу</h2>
      <p class="note">Приклад читання параметрів маршруту та query.</p>

      <div class="router-details">
        <p><strong>ID з URL:</strong> {{ postId }}</p>
        <p><strong>Query source:</strong> {{ source }}</p>
        <p><strong>Preview режим:</strong> {{ isPreview ? 'так' : 'ні' }}</p>
      </div>

      <div class="row">
        <button type="button" class="btn btn--ghost" @click="goPrev">Попередній</button>
        <button type="button" class="btn" @click="goNext">Наступний</button>
        <button type="button" class="btn btn--ghost" @click="router.back()">Назад</button>
      </div>

      <div class="row">
        <router-link class="nav-link" to="/router">До списку</router-link>
        <router-link class="nav-link" to="/">На головну</router-link>
      </div>
    </section>
  </main>
</template>
