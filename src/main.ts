import { createApp } from 'vue'
import './style.css'
import "@/assets/css/main.css";
import "@/assets/font/text.css";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from "./router/index"
import * as Icons from "@element-plus/icons-vue";
import { toLine } from './utils'
import mUI from "./components/index"

// 引入Tailwind CSS
import 'tailwindcss/tailwind.css';

const app = createApp(App)

// 全局注册图标
for (const i in Icons) {
  if (Object.prototype.hasOwnProperty.call(Icons, i)) {
    app.component(`el-icon-${toLine(i)}`,(Icons as any)[i])
  }
}

app.use(router).use(ElementPlus).use(mUI)
app.mount('#app')
