import { defineStore } from 'pinia'

export const useLessonStore = defineStore('lesson', {
  state: () => ({
    count: 0,
    loading: false,
    history: []
  }),
  getters: {
    doubled: (state) => state.count * 2,
    historyTotal: (state) => state.history.length
  },
  actions: {
    increment(step = 1) {
      this.count += step
      this.history.unshift(`+${step}`)
    },
    decrement(step = 1) {
      this.count -= step
      this.history.unshift(`-${step}`)
    },
    reset() {
      this.count = 0
      this.history.unshift('reset')
    },
    async incrementAsync(step = 1) {
      this.loading = true
      await new Promise((resolve) => setTimeout(resolve, 700))
      this.increment(step)
      this.loading = false
    }
  }
})
