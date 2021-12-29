import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { api } from './api'
import antIcon from './plugins/ant-icon'

import './ui'

createApp(App).use(router).use(store).use(api).use(antIcon).mount('#app')
