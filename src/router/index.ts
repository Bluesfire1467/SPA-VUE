import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import NotFound404 from '@/modules/common/pages/NotFound404.vue';


export const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    // Landing
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPages.vue')
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue')
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue')
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          props: (route) => {
            // Controla las props
            const id = +route.params.id
            return isNaN(id) ? { id:1 } : { id }
          },
          // beforeEnter:
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue')
        }
      ]
    },
    // Auth
    {
      path: '/auth',
      redirect: '/login',
      component: () => import('@/modules/auth/layouts/AuthLayouts.vue'),
      children: [
        {
          path: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue')
        },
        {
          path: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue')
        }
      ]
    },
    // Not Found
    {
      path: '/:pathMatch(.*)*',
      component: NotFound404,
    }
  ]
})
