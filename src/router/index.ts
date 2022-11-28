import {createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router";
import Container from "../components/container/index.vue";
import Home from "../views/Home.vue";
import Menu from "../views/menus/index.vue"

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/menu',
        component: Menu
      },
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router