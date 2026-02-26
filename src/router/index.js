import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ApiCrudView from '@/views/ApiCrudView.vue'
import PiniaView from '@/views/PiniaView.vue'
import RouterBasicsView from '@/views/RouterBasicsView.vue'
import RouteParamsView from '@/views/RouteParamsView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/router', name: 'router-basics', component: RouterBasicsView },
  { path: '/pinia', name: 'pinia', component: PiniaView },
  { path: '/api', name: 'api-crud', component: ApiCrudView },
  {
    path: '/optimize',
    name: 'optimize',
    component: () => import('@/views/OptimizationView.vue'),
  },
  {
    path: '/router/post/:id',
    name: 'router-post',
    component: RouteParamsView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
