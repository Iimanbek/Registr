import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Notifications from '@kyvg/vue3-notification'
import './assets/main.css'
import BaseLayOut from './layouts/BaseLayOut.vue'
const app = createApp(App)
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: "AIzaSyCYwDa8pInVFMDC3mbTTDcrjZhOUzA_SEQ",
  authDomain: "registration-bf1ba.firebaseapp.com",
  projectId: "registration-bf1ba",
  storageBucket: "registration-bf1ba.appspot.com",
  messagingSenderId: "637515628084",
  appId: "1:637515628084:web:ea333e86a869a8a6409461"
};
firebase.initializeApp(firebaseConfig)



const vuetify = createVuetify({
  components,
  directives,
})



app.component('BaseLayout', BaseLayOut)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(Notifications)

app.mount('#app')
