<script setup>
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { useDashboardStore } from '@/stores/dashboardStore'
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'
import DashboardStats from '@/components/dashboard/DashboardStats.vue'
import DashboardChart from '@/components/dashboard/DashboardChart.vue'
import ActivityPanel from '@/components/dashboard/ActivityPanel.vue'

const store = useDashboardStore()

onMounted(() => {
  store.loadDashboard()
})

watch(
  () => store.period,
  () => {
    store.loadDashboard()
  },
)

onBeforeUnmount(() => {
  store.resetState()
})
</script>

<template>
  <section class="page dashboard">
    <DashboardHeader v-model:period="store.period" />

    <DashboardStats :stats="store.stats" />

    <div class="dashboard__grid">
      <DashboardChart :chart="store.chart" />
      <ActivityPanel
        v-model:query="store.query"
        v-model:status="store.statusFilter"
        :items="store.filteredActivity"
        :loading="store.loading"
        :error="store.error"
      />
    </div>
  </section>
</template>

<style scoped>
.dashboard {
  display: grid;
  gap: 16px;
}

.dashboard__grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
</style>
