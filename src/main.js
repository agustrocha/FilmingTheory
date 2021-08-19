import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'

import 'aos/dist/aos.css'

createApp(App).use(store).use(router).use(AOS.init()).mount('#app')
