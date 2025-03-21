import { createApp } from 'vue'
import './style.css'
import 'animate.css';
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
// destructuring => { } on récupère ce dont on a besoin 

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
