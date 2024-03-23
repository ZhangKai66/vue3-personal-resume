import {createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Demos from "../views/demos/index.vue";
import Others from "../views/others/index.vue";
import Projects from "../views/projects/index.vue";
import Thoughts from "../views/thoughts/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    redirect: '/blog',
    children: [
      {
        path: '/blog',
        component: Blog,
      },
      {
        path: '/projects',
        component: Projects,
      },
      {
        path: '/demos',
        component: Demos,
      },
      {
        path: '/thoughts',
        component: Thoughts,
      },
      {
        path: '/others',
        component: Others,
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router