import { createRouter, createWebHistory } from 'vue-router'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView.js'//createListView.js is HOC(High Order Component)

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'news',
    component: createListView('NewsView'),
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: createListView('JobsView'),
  },
  {
    path: '/ask',
    name: 'ask',
    component: createListView('AskView'),
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