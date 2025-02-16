
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'



import {aliases, mdi} from 'vuetify/iconsets/mdi'

import "@mdi/font/css/materialdesignicons.css"

// import VeeValidate from 'vee-validate'

const vuetify = createVuetify({
    components,
    directives,
    icons:{
      defaultSet: 'mdi',
      aliases,
      sets:{
        mdi,
      },
    },
    
  })

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
// app.use('VeeValidate');
