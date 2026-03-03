<script setup>
defineProps({
  stats: { type: Array, required: true },
})
</script>

<template>
  <div class="dashboard__stats grid-2">
    <article v-for="item in stats" :key="item.id" class="card stat-card">
      <p class="muted">{{ item.label }}</p>
      <div class="stat-card__value">{{ item.value }}</div>
      <span class="badge">{{ item.trend }}</span>
    </article>
  </div>
</template>

<style scoped>
.stat-card__value {
  font-size: 26px;
  font-weight: 600;
  margin: 6px 0 10px;
}
</style>
