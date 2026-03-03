<script setup>
defineProps({
  chart: { type: Array, required: true },
})
</script>

<template>
  <article class="card chart-card">
    <div class="chart-card__header">
      <h3>Активність</h3>
      <span class="muted">Тижневий тренд</span>
    </div>
    <div class="chart">
      <div
        v-for="(value, index) in chart"
        :key="index"
        class="chart__bar"
        :style="{ height: value * 4 + 'px' }"
      />
    </div>
  </article>
</template>

<style scoped>
.chart-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.chart {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  align-items: end;
  margin-top: 16px;
  min-height: 140px;
}

.chart__bar {
  background: linear-gradient(180deg, #3a6ad6, #1f3d8b);
  border-radius: 8px 8px 2px 2px;
}
</style>
