import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Projects from '@/views/Projects.vue'
import Teams from '@/views/Teams.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams
  }
]

const router = new VueRouter({
  routes
})

export default router
