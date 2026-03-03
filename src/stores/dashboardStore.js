import { defineStore } from 'pinia'
import { dashboardService } from '@/services/api/dashboardService'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    period: '7d',
    query: '',
    statusFilter: 'all',
    stats: [],
    activity: [],
    chart: [],
    loading: false,
    error: '',
  }),
  getters: {
    filteredActivity(state) {
      const q = state.query.trim().toLowerCase()
      return state.activity.filter((item) => {
        const matchesText =
          !q || item.title.toLowerCase().includes(q) || item.owner.toLowerCase().includes(q)
        const matchesStatus = state.statusFilter === 'all' || item.status === state.statusFilter
        return matchesText && matchesStatus
      })
    },
  },
  actions: {
    async loadDashboard() {
      this.loading = true
      this.error = ''
      try {
        const data = await dashboardService.fetchDashboardData(this.period)
        this.stats = data.stats
        this.activity = data.activity
        this.chart = data.chart
      } catch (error) {
        this.error = error?.message || 'Не вдалося отримати дані.'
      } finally {
        this.loading = false
      }
    },
    resetState() {
      this.period = '7d'
      this.query = ''
      this.statusFilter = 'all'
      this.stats = []
      this.activity = []
      this.chart = []
      this.loading = false
      this.error = ''
    },
  },
})
