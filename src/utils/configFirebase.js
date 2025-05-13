import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDMf8K7adNLHKbYTX2Tbxqx9TTWBu44lBI',
  authDomain: 'coderhouse-ed68a.firebaseapp.com',
  projectId: 'coderhouse-ed68a',
  storageBucket: 'coderhouse-ed68a.firebasestorage.app',
  messagingSenderId: '283158148880',
  appId: '1:283158148880:web:ba014b2902971abb295795'
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const createFirebaseApp = () => {
  initializeApp(firebaseConfig)
}
