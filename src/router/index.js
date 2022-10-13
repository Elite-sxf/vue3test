import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue'),
    }
  ]
})

router.beforeEach((to, from,next) => {
  // ...
  console.log(to);
  if(to.name !== "home"&&to.name !== "about"&&to.path !== "/404") {
    next("/404")
  }else {
    next()
  }
})

export default router
