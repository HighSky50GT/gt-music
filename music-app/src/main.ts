import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({history: createWebHashHistory(),routes:[{ path: '/', component:  {}}]})
createApp(App).use(router).mount('#app')
