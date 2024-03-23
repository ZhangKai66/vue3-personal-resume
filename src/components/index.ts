import {App} from "vue";
import menu from "./menu/index";

console.log('menu',menu)

const components:any[] = [
  menu,
];

export default {
  install(app: App) {
    components.map(component => {
      app.use(component)
    })
  }
}