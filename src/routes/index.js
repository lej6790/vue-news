import { createRouter, createWebHistory } from 'vue-router'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
// import createListView from '../views/CreateListView.js'//createListView.js is HOC(High Order Component)
import NewsView from '@/views/NewsView.vue'
import AskView from '@/views/AskView.vue'
import JobsView from '@/views/JobsView.vue'
import bus from '@/utils/bus.js'
import store from '@/store'

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    // component: createListView('NewsView'),
    beforeEnter: (to, from, next) => {
      bus.emit('start:spinner');
      setTimeout(() => {
        // dispatch는 항상 Promise를 반환
        store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
            console.log(error);
          });
        }, 3000);
    },
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView,
    // component: createListView('JobsView'),
    beforeEnter: (to, from, next) => {
      bus.emit('start:spinner');
      setTimeout(() => {
        // dispatch는 항상 Promise를 반환
        store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
              console.log(error);
          });
      }, 3000);
    },
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView,
    // component: createListView('AskView'),
    beforeEnter: (to, from, next) => {
      bus.emit('start:spinner');
      setTimeout(() => {
        // dispatch는 항상 Promise를 반환
        store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch((error) => {
              console.log(error);
          });
      }, 3000);
    },
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