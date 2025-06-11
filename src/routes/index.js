import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    component: NewsView
  },
  {
    path: '/jobs',
    component: JobsView
  },
  {
    path: '/ask',
    component: AskView
  },
  {
    path: '/user/:id',
    component: UserView
  },
  {
    path: '/item/:id',
    component: ItemView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router