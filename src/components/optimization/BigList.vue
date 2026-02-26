<script setup>
const list = Array.from({ length: 120 }, (_, i) => `Елемент ${i + 1}`)
</script>

<template>
  <div class="card">
    <p class="title">Async компонент завантажено</p>
    <ul class="grid">
      <li v-for="item in list" :key="item" class="pill">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 12px;
  background: #f8fafc;
}

.title {
  margin: 0 0 8px;
  font-weight: 600;
}

.grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 6px;
}

.pill {
  background: #e2e8f0;
  border-radius: 999px;
  padding: 4px 8px;
  font-size: 12px;
  text-align: center;
}
</style>
