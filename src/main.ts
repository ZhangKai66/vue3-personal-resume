import { createApp } from 'vue'
import './style.css'
import "@/assets/css/main.css";
import "@/assets/font/text.css";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from "./router/index"

// 引入Tailwind CSS
import 'tailwindcss/tailwind.css';

const app = createApp(App)
app.use(router).use(ElementPlus)
app.mount('#app')
