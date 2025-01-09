// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCTCTdT011NskrifIdZ5_yAiWbrMD6iRRo',
  authDomain: 'coffee-shop-7e803.firebaseapp.com',
  projectId: 'coffee-shop-7e803',
  storageBucket: 'coffee-shop-7e803.firebasestorage.app',
  messagingSenderId: '818934493151',
  appId: '1:818934493151:web:4394bb6c20b2225c985e6a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
