import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faXmark)

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
