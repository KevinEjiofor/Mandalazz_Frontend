// import ViewDetailsPage from '@/components/views/ViewDetailsPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
// import HomePage from '../views/HomePage.vue';
// import ProductPage from '../views/ProductPage.vue';
import ViewDetailsPage from '@/views/ViewDetailsPage.vue';

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomePage.vue'), // Example home page
  },
  // {
  //   path: '/product/:id',
  //   name: 'Product',
  //   component: ProductPage,
  //   props: true, // Pass route params as props
  // },

  {
    path: '/view-details/:id',
    name: 'ViewDetailsPage',
    component: ViewDetailsPage,
    props: true, // Pass route params as props
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;