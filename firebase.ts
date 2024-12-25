// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkh-7hmNcVsSwO0h_-xMQ8dz9Q1cge1n4",
  authDomain: "netflix-d8cd1.firebaseapp.com",
  projectId: "netflix-d8cd1",
  storageBucket: "netflix-d8cd1.firebasestorage.app",
  messagingSenderId: "1088433598684",
  appId: "1:1088433598684:web:64c4b2d4c57add1a6b8419",
  measurementId: "G-QFYSZCW8NW"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
