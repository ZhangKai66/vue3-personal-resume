import { createApp } from 'vue'
import './style.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from "./router/index"
import * as Icons from "@element-plus/icons-vue";
import { toLine } from './utils'
import mUI from "./components/index"

const app = createApp(App)

// 全局注册图标
for (const i in Icons) {
  if (Object.prototype.hasOwnProperty.call(Icons, i)) {
    app.component(`el-icon-${toLine(i)}`,(Icons as any)[i])
  }
}

app.use(router).use(ElementPlus).use(mUI)
app.mount('#app')
