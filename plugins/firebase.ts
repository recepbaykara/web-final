import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(nuxtApp => {
  const firebaseConfig = {
    apiKey: "AIzaSyCImq46-ObLLNdjsuXzWXl-20dlWJLzOzo", // Firebase apiKey
    authDomain: "web-final-29a06.firebaseapp.com", // Firebase authDomain
    projectId: "web-final-29a06", // Firebase projectId
    storageBucket: "web-final-29a06.firebasestorage.app", // Firebase storageBucket
    messagingSenderId: "303263586144", // Firebase messagingSenderId
    appId: "1:303263586144:web:f0386df926b0e062ae7005", // Firebase appId
    measurementId: "G-R7HBMYMX5Z" // Firebase measurementId (isteğe bağlı)
  }

  // Firebase'i başlat
  const firebaseApp = initializeApp(firebaseConfig)

  // Firebase servislerini Nuxt.js uygulamasına dahil et
  nuxtApp.provide('auth', getAuth(firebaseApp))
  nuxtApp.provide('firestore', getFirestore(firebaseApp))
})
