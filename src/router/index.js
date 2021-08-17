import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Project from '../views/Project'
import HomeLayout from '../layout/HomeLayout'
import EmptyView from '../views/EmptyView'

const routes = [
  {
    path: '/',
    name: 'HomeLayout',
    component: HomeLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: EmptyView
      },
      {
        path: '/project',
        name: 'Project details',
        component: Project
      },
      {
        path: '/about',
        name: 'About',
        component: About
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
