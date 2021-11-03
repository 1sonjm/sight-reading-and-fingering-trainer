import FontAwesomeIcon from '@/plugins/fontAwesomeIcon'
import logger from '@/plugins/logger'

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from '@/plugins/i18n'

const app = createApp(App)

app.use(i18n)
  .use(store)
  .use(logger)
  .use(router)
  .use(i18n)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
