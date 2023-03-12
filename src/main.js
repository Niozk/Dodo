import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyzILY15vxc8vdQLIlL8gqH6KZY041l1c",
  authDomain: "dodo-list-1456a.firebaseapp.com",
  projectId: "dodo-list-1456a",
  storageBucket: "dodo-list-1456a.appspot.com",
  messagingSenderId: "460540348315",
  appId: "1:460540348315:web:23ff5461c9d5571996433e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
