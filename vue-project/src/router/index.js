import { createRouter, createWebHistory } from 'vue-router'
import HeaderComponent from '../components/HeaderComponent.vue';
import NavigationComponent from '../components/NavigationComponent.vue';
import HomeComponent from '../components/HomeComponent.vue'; 
import AboutMeComponent from '../components/AboutMeComponent.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: {
          default: HomeComponent,
          header: HeaderComponent,
          navigation: NavigationComponent
      } 
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: AboutMeComponent,
        header: HeaderComponent,
        navigation: NavigationComponent
      }
    }
  ]
})

export default router
