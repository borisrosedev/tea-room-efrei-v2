import { createApp } from 'vue'
import './style.css'
import 'animate.css';
import App from './App.vue'
import router from './router'
// destructuring => { } on récupère ce dont on a besoin 

createApp(App).use(router).mount('#app')
