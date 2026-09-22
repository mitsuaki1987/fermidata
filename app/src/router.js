import { createRouter, createWebHistory } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Search from './components/Search.vue'
import Result from './components/Result.vue'

const routes = [
//   { path: '/hello', name: 'HelloWorld', component: HelloWorld },
  {
    path: '/',
    name: 'Root',
    component: Search,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/result',
    name: 'Result',
    component: Result,
    props: true,
  },
]

const router = createRouter({
  // publicPath (/fermidata/search/) と揃える
  history: createWebHistory('/fermidata/search/'),
  routes,
})

export default router
