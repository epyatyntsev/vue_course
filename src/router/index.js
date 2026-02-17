import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RouterBasicsView from '@/views/RouterBasicsView.vue'
import RouteParamsView from '@/views/RouteParamsView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/router', name: 'router-basics', component: RouterBasicsView },
  {
    path: '/router/post/:id',
    name: 'router-post',
    component: RouteParamsView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
