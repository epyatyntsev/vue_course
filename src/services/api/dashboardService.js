const stats = [
  { id: 'users', label: 'Активні користувачі', value: 1240, trend: '+12%' },
  { id: 'orders', label: 'Замовлення', value: 312, trend: '+4%' },
  { id: 'revenue', label: 'Дохід', value: 48210, trend: '+8%' },
  { id: 'tickets', label: 'Запити в сапорт', value: 19, trend: '-3%' },
]

const activity = [
  { id: 1, title: 'Нове замовлення #2312', status: 'new', owner: 'Ірина', date: '2026-02-20' },
  { id: 2, title: 'Повернення #2291', status: 'blocked', owner: 'Олег', date: '2026-02-19' },
  { id: 3, title: 'Запит на інтеграцію', status: 'in-progress', owner: 'Марія', date: '2026-02-19' },
  { id: 4, title: 'Оновлення тарифу', status: 'done', owner: 'Антон', date: '2026-02-18' },
  { id: 5, title: 'Тікет: помилка в оплаті', status: 'new', owner: 'Софія', date: '2026-02-18' },
  { id: 6, title: 'Презентація для клієнта', status: 'done', owner: 'Ігор', date: '2026-02-17' },
]

const chartMap = {
  '7d': [6, 10, 8, 16, 12, 14, 18],
  '30d': [12, 22, 18, 30, 26, 28, 35],
  '90d': [8, 14, 12, 20, 19, 24, 27],
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const dashboardService = {
  async fetchDashboardData(period = '7d') {
    await wait(450)
    return {
      stats,
      activity,
      chart: chartMap[period] ?? chartMap['7d'],
    }
  },
}
