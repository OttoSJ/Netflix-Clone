// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCi-8LUd0WpfVyDpC9wgE1QyS3LJQobJHE',
  authDomain: 'netflix-clone-3b593.firebaseapp.com',
  projectId: 'netflix-clone-3b593',
  storageBucket: 'netflix-clone-3b593.appspot.com',
  messagingSenderId: '852610035215',
  appId: '1:852610035215:web:a9ec8e1b598d7575117d7a',
  measurementId: 'G-RD7DF69EXF',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
