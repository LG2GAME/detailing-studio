import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'

import App from './App.vue'
import '@/styles/main.scss'

const app = createApp(App)

const head = createHead()

app.use(head)

app.mount('#app')
