<script setup>
import { computed, defineAsyncComponent, ref } from 'vue'

const items = ref([
  { id: 1, price: 100 },
  { id: 2, price: 250 },
  { id: 3, price: 80 },
])

const total = computed(() => items.value.reduce((sum, item) => sum + item.price, 0))

const counter = ref(0)
const heavyList = Array.from({ length: 2000 }, (_, i) => i + 1)

const AsyncBigList = defineAsyncComponent(() =>
  import('@/components/optimization/BigList.vue'),
)
</script>

<template>
  <section class="page">
    <h2>Оптимізація: приклади в коді</h2>

    <article class="block">
      <h3>1) computed замість обчислень у шаблоні</h3>
      <p>Сума: {{ total }}</p>
    </article>

    <article class="block">
      <h3>2) v-once для статичних блоків</h3>
      <div v-once class="static-card">
        <strong>Статичний блок</strong>
        <p>Цей контент не буде перерендерюватись.</p>
      </div>
    </article>

    <article class="block">
      <h3>3) v-memo для стабільних піддерев</h3>
      <button class="btn" @click="counter++">+1 ({{ counter }})</button>
      <div class="list" v-memo="[counter]">
        <div v-for="n in heavyList" :key="n" class="list__item">{{ n }}</div>
      </div>
    </article>

    <article class="block">
      <h3>4) Async компонент (code splitting)</h3>
      <AsyncBigList />
    </article>
  </section>
</template>

<style scoped>
.page {
  max-width: 900px;
  margin: 32px auto;
  padding: 0 16px 48px;
}

.block {
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  margin-bottom: 16px;
  background: #fff;
}

.static-card {
  padding: 12px;
  border-radius: 8px;
  background: #f9fafb;
  border: 1px dashed #d1d5db;
}

.btn {
  padding: 8px 12px;
  border: 1px solid #cbd5f5;
  background: #eef2ff;
  border-radius: 8px;
  cursor: pointer;
}

.list {
  margin-top: 12px;
  max-height: 180px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 6px;
}

.list__item {
  background: #f3f4f6;
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 12px;
  text-align: center;
}
</style>
