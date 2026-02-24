import { defineStore } from 'pinia'
import { postsService } from '@/services/api/postsService'

export const useApiStore = defineStore('apiStore', {
  state: () => ({
    posts: [],
    loading: false,
    error: '',
  }),
  getters: {
    totalPosts: (state) => state.posts.length,
  },
  actions: {
    async fetchPosts() {
      this.loading = true
      this.error = ''
      try {
        const response = await postsService.fetchPosts(20)
        this.posts = response.data
      } catch (error) {
        this.error = error?.message || 'Не вдалося отримати дані з API.'
      } finally {
        this.loading = false
      }
    },
    async createPost(payload) {
      this.loading = true
      this.error = ''
      const response = await postsService.createPost(payload)
      this.posts.unshift({ ...payload, ...response.data })
      this.loading = false
    },
    async updatePost(id, payload) {
      this.loading = true
      this.error = ''
      const response = await postsService.updatePost(id, { id, ...payload })
      this.posts = this.posts.map((post) =>
        post.id === id ? { ...post, ...response.data, ...payload } : post,
      )
      this.loading = false
    },
    async deletePost(id) {
      this.loading = true
      this.error = ''
      await postsService.deletePost(id)
      this.posts = this.posts.filter((post) => post.id !== id)
      this.loading = false
    },
  },
})
