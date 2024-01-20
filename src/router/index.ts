import {createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/blog',
        component: Blog,
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router