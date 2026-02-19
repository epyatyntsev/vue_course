<script setup>
import { ref } from 'vue'
import { useLessonStore } from '@/stores/lessonStore'

const store = useLessonStore()
const step = ref(1)

const addAsync = () => {
  store.incrementAsync(step.value)
}
</script>

<template>
  <main class="page">
    <section class="card">
      <h2>Pinia Store: стан, геттери, дії</h2>
      <p class="note">Приклад керування спільним станом через Pinia.</p>

      <div class="row">
        <span class="badge">Count: {{ store.count }}</span>
        <span class="badge">Doubled: {{ store.doubled }}</span>
      </div>

      <div class="row">
        <label>Крок</label>
        <input v-model.number="step" type="number" min="1" class="input" />
      </div>

      <div class="row">
        <button type="button" class="btn" @click="store.increment(step)">+ Додати</button>
        <button type="button" class="btn btn--ghost" @click="store.decrement(step)">- Відняти</button>
        <button type="button" class="btn btn--ghost" @click="store.reset">Скинути</button>
        <button type="button" class="btn" :disabled="store.loading" @click="addAsync">
          {{ store.loading ? 'Почекай...' : 'Додати асинхронно' }}
        </button>
      </div>
    </section>

    <section class="card">
      <h3>Історія змін ({{ store.historyTotal }})</h3>
      <ul class="list">
        <li v-for="(item, index) in store.history" :key="`history-${index}`">
          {{ item }}
        </li>
      </ul>
    </section>
  </main>
</template>
