import { createApp } from 'vue'
import router from './plugins/router'
import App from '@/App.vue'

// Import css
import './styles/main.css'
import './styles/defaultStyles.css'

createApp(App).use(router).mount('#app')
