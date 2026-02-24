import api from '@/services/api/httpClient'

const POSTS_PREFIX = '/posts'

export const postsService = {
  fetchPosts(limit = 6) {
    return api.get(`${POSTS_PREFIX}?_limit=${limit}`)
  },
  createPost(payload) {
    return api.post(POSTS_PREFIX, payload)
  },
  updatePost(id, payload) {
    return api.put(`${POSTS_PREFIX}/${id}`, payload)
  },
  deletePost(id) {
    return api.delete(`${POSTS_PREFIX}/${id}`)
  },
}
