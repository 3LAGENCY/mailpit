import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import JsonViewer from 'vue-json-viewer'

import './assets/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import 'bootstrap'

const app = createApp(App)
app.use(JsonViewer);
app.use(router)
app.mount('#app')
