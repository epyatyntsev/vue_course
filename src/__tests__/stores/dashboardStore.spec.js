import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useDashboardStore } from '@/stores/dashboardStore'
import { dashboardService } from '@/services/api/dashboardService'

describe('dashboardStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.restoreAllMocks()
  })

  it('loads dashboard data successfully', async () => {
    const store = useDashboardStore()
    const payload = {
      stats: [{ id: 'users', label: 'Users', value: 1, trend: '+1%' }],
      activity: [{ id: 1, title: 'Task', status: 'new', owner: 'Ann', date: '2026-03-03' }],
      chart: [1, 2, 3],
    }

    vi.spyOn(dashboardService, 'fetchDashboardData').mockResolvedValue(payload)

    await store.loadDashboard()

    expect(store.loading).toBe(false)
    expect(store.error).toBe('')
    expect(store.stats).toEqual(payload.stats)
    expect(store.activity).toEqual(payload.activity)
    expect(store.chart).toEqual(payload.chart)
  })

  it('sets error when service fails', async () => {
    const store = useDashboardStore()
    vi.spyOn(dashboardService, 'fetchDashboardData').mockRejectedValue(new Error('Network down'))

    await store.loadDashboard()

    expect(store.loading).toBe(false)
    expect(store.error).toBe('Network down')
  })

  it('filters activity by query and status', () => {
    const store = useDashboardStore()
    store.activity = [
      { id: 1, title: 'Order one', status: 'new', owner: 'Ira', date: '2026-03-01' },
      { id: 2, title: 'Order two', status: 'done', owner: 'Oleh', date: '2026-03-01' },
      { id: 3, title: 'Support task', status: 'new', owner: 'Ira', date: '2026-03-01' },
    ]

    store.query = 'order'
    store.statusFilter = 'new'

    expect(store.filteredActivity).toEqual([
      { id: 1, title: 'Order one', status: 'new', owner: 'Ira', date: '2026-03-01' },
    ])
  })

  it('resets state to defaults', () => {
    const store = useDashboardStore()
    store.period = '90d'
    store.query = 'abc'
    store.statusFilter = 'done'
    store.stats = [{ id: 'x' }]
    store.activity = [{ id: 1 }]
    store.chart = [1]
    store.loading = true
    store.error = 'error'

    store.resetState()

    expect(store.period).toBe('7d')
    expect(store.query).toBe('')
    expect(store.statusFilter).toBe('all')
    expect(store.stats).toEqual([])
    expect(store.activity).toEqual([])
    expect(store.chart).toEqual([])
    expect(store.loading).toBe(false)
    expect(store.error).toBe('')
  })
})

