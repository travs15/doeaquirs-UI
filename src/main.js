import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
import 'primeicons/primeicons.css'

//import "bootstrap/dist/css/bootstrap.css"

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app')

//import "bootstrap/dist/js/bootstrap.js"
