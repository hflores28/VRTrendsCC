// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import KeywordsTrends from '../components/KeywordsTrends.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: KeywordsTrends,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
