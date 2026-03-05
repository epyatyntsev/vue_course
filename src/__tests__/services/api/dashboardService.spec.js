import { afterEach, describe, expect, it, vi } from 'vitest'
import { dashboardService } from '@/services/api/dashboardService'

describe('dashboardService', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns period-specific chart data', async () => {
    vi.useFakeTimers()

    const promise = dashboardService.fetchDashboardData('30d')
    vi.advanceTimersByTime(450)
    const data = await promise

    expect(data.stats.length).toBeGreaterThan(0)
    expect(data.activity.length).toBeGreaterThan(0)
    expect(data.chart).toEqual([12, 22, 18, 30, 26, 28, 35])
  })

  it('falls back to 7d data for unknown period', async () => {
    vi.useFakeTimers()

    const promise = dashboardService.fetchDashboardData('unknown')
    vi.advanceTimersByTime(450)
    const data = await promise

    expect(data.chart).toEqual([6, 10, 8, 16, 12, 14, 18])
  })
})

