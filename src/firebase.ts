import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyAYuDeSxqHr6Mz28676V7S5uJdNRvmGo-8',
  authDomain: 'bread-bank-f627e.firebaseapp.com',
  projectId: 'bread-bank-f627e',
  storageBucket: 'bread-bank-f627e.appspot.com',
  messagingSenderId: '712785150046',
  appId: '1:712785150046:web:335859efb4cfe1baa974cf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
